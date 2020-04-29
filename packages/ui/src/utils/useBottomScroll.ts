import {
  useCallback, useEffect, useRef, useMemo,
} from 'react'
import throttle from './throttle'

const createCallback = (handleOnScroll: () => void) => throttle(handleOnScroll, 200)

const useBottomScroll = <T extends HTMLElement>(
  onBottom: () => void,
):void => {
  const debouncedOnBottom = useMemo(() => createCallback(onBottom), [onBottom])
  const containerRef = useRef<T>(null)
  const handleOnScroll = useCallback(() => {
    if (containerRef.current != null) {
      const node: T = containerRef.current
      const bottom = Math.round(node.scrollTop + node.clientHeight)
      const position = Math.round(node.scrollHeight)

      if (position <= bottom) {
        debouncedOnBottom()
      }
    } else {
      const node: Element = document.scrollingElement || document.documentElement
      const bottom = Math.round(node.scrollTop + window.innerHeight)
      const position = Math.round(node.scrollHeight)

      if (position <= bottom) {
        debouncedOnBottom()
      }
    }
    // ref dependency needed for the tests, doesn't matter for normal execution
  }, [debouncedOnBottom])

  useEffect((): (() => void) => {
    const ref: T | null = containerRef.current
    if (ref != null) {
      ref.addEventListener('scroll', handleOnScroll)
    } else if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleOnScroll)
    }

    return () => {
      if (ref != null) {
        ref.removeEventListener('scroll', handleOnScroll)
      } else if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleOnScroll)
      }
    }
  }, [handleOnScroll])

  return containerRef
}

export default useBottomScroll
