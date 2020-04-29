import React, {
  useRef, useEffect, useState,
} from 'react'
import styled from '@emotion/styled'

export type Props = {
  id?: string;
  children?: JSX.Element | JSX.Element[];
}

const Div = styled.div<{top: number}>`
  position: relative;
  height: calc(100vh - ${({ top }): string => `${top}`}px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 0;
`

const Hero = ({ id, children }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const [top, setTop] = useState(0)
  useEffect(() => {
    const newTop = ref?.current?.offsetTop || 0
    setTop(newTop)
  }, [ref])
  return <Div id={id} ref={ref} top={top}>{children}</Div>
}

export default Hero
