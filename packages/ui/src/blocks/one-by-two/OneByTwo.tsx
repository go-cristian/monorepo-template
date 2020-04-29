import React from 'react'
import styled from '@emotion/styled'
import media from '../../utils/media'

export type Props = {
  id?: string;
  children?: JSX.Element | JSX.Element[];
}

const Div = styled.div`
  position: relative;
  height: auto;
  width: 100%;

  ${media.sm`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-columns: 1fr minmax(0, 1.5fr);

    * {
      max-width: 100%;
    }
  `}
`
const render = (children: JSX.Element[] | JSX.Element): (JSX.Element[] | JSX.Element) => {
  if ((children as JSX.Element[]).length) {
    return (children as JSX.Element[]).slice(0, 2)
  }
  return children
}

const OneByTwo = ({ id, children }: Props): JSX.Element => (
  <Div id={id}>
    {render(children)}
  </Div>
)

export default OneByTwo
