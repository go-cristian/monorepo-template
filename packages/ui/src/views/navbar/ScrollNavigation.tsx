import React, {
  useEffect, useState, useRef,
} from 'react'
import styled from '@emotion/styled'
import { useScroll } from '../../utils/windowEvents'

type Props = {
  id?: string;
  children?: JSX.Element | JSX.Element[];
  contentId?: string;
}

const Div = styled.div<{ hide: boolean; height: number }>`
  position: fixed;
  width: 100%;
  display: block;
  transition: top 0.3s;
  top: ${({ hide, height }): string => (hide ? `-${height}px` : '0')};
  z-index: 1;
`

const marginTo = (contentId?: string, diff?: number): void => {
  if (contentId) {
    const content = document.getElementById(contentId)
    if (content && typeof window !== 'undefined') {
      content.style.marginTop = `${diff}px`
    }
  }
}

const ScrollNavigation = (props: Props): JSX.Element => {
  const { id, contentId, children } = props
  const [hide, setHide] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const scroll = useScroll()
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHide(scroll.direction === 'DOWN' && scroll.position > height)
  }, [scroll, height])

  useEffect(() => {
    if (ref && ref.current) {
      const newHeight = ref?.current?.clientHeight || 0
      marginTo(contentId, newHeight)
      setHeight(newHeight)
    }
    return (): void => {
      marginTo(contentId, -height)
    }
  }, [ref, contentId, height])

  return (
    <Div id={id} hide={hide} height={height} ref={ref}>
      {children}
    </Div>
  )
}

export default ScrollNavigation
