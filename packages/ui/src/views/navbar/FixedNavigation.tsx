import React, {
  useEffect, useRef,
} from 'react'
import styled from '@emotion/styled'

type Props = {
  id?: string;
  children?: JSX.Element | JSX.Element[];
  contentId?: string;
}

const Div = styled.div`
  position: fixed;
  width: 100%;
  height: auto;
  top: 0;
  z-index: 1;
`

const marginTo = (contentId?: string, diff?: number): void => {
  if (contentId) {
    const content = document.getElementById(contentId)
    if (content) {
      content.style.marginTop = `${diff}px`
    }
  }
}

const FixedNavigation = (props: Props): JSX.Element => {
  const { id, contentId, children } = props
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (ref && ref.current) {
      const height = ref?.current?.clientHeight || 0
      marginTo(contentId, height)
    }
    return (): void => {
      marginTo(contentId, 0)
    }
  }, [ref, contentId])

  return (
    <Div id={id} ref={ref}>
      {children}
    </Div>
  )
}

export default FixedNavigation
