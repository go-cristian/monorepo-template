import { useState, useEffect } from 'react'

const getWidth = (): number => {
  if (typeof window === 'undefined') return 0
  return window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth
}

const getScroll = (): number => {
  if (typeof window === 'undefined') return 0
  return window.pageYOffset
}

const getDirection = (diff: number) => {
  if (diff === 0) return 'NONE'
  if (diff > 0) return 'UP'
  return 'DOWN'
}

export const useCurrentWitdh = (): number => {
  const [width, setWidth] = useState(getWidth())

  useEffect(() => {
    let timeoutId = 0
    const resizeListener = (): void => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(getWidth()), 150)
    }
    window.addEventListener('resize', resizeListener)
    return (): void => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return width
}

type Scroll = {
  position: number;
  direction: string;
}

export const useScroll = (): Scroll => {
  const [scroll, setScroll] = useState({
    position: getScroll(),
    direction: 'NONE',
  })

  useEffect(() => {
    const scrollListener = (): void => {
      const newScroll = getScroll()
      const diff = scroll.position - newScroll
      const direction = getDirection(diff)
      setScroll({ position: newScroll, direction })
    }
    window.addEventListener('scroll', scrollListener)
    return (): void => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [scroll])

  return scroll
}
