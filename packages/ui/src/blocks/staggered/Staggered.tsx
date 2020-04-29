import React, { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import media from '../../utils/media'
import { useCurrentWitdh } from '../../utils/windowEvents'

const rowGap = 10
const rowHeight = 20

const Div = styled.div`
  position: relative;
  display: grid;
  grid-gap: ${rowGap}px;
  grid-auto-rows: ${rowHeight}px;
  grid-template-columns: repeat(2, 1fr);

  ${media.lg`
    grid-template-columns: repeat(3, 1fr);
  `}
`

const InnerCell = styled.div<{ end: number }>`
  grid-row-end: span ${({ end }): string => `${end}`};
  height: auto;
`

const Cell = (props: Props): JSX.Element => {
  const { children } = props
  const ref = useRef<HTMLDivElement>(null)
  const [rowSpan, setRowSpan] = useState(0)
  const windowWidth = useCurrentWitdh()
  useEffect(() => {
    if (ref && ref.current) {
      const height = ref?.current?.clientHeight || 0
      const newRowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap))
      setRowSpan(newRowSpan)
    }
  }, [ref, children, windowWidth])

  return (
    <InnerCell end={rowSpan}>
      <div ref={ref}>{children}</div>
    </InnerCell>
  )
}

const render = (children: JSX.Element[] | JSX.Element): JSX.Element | JSX.Element[] => {
  if ((children as JSX.Element[]).length) {
    return (children as JSX.Element[]).map((child, index) => (
      <Cell key={String(index)}>{child}</Cell>
    ))
  }
  return <Cell>{children}</Cell>
}

type Props = {
  id?: string;
  children?: JSX.Element | JSX.Element[];
}

const Staggered = ({ id, children }: Props): JSX.Element => (
  <Div id={id}>{render(children)}</Div>
)

export default Staggered
