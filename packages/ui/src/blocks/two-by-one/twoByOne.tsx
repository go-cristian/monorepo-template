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
    grid-template-columns: 1.5fr 1fr;
    grid-template-columns: minmax(0, 1.5fr) 1fr;

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

const TwoByOne = ({ id, children }: Props): JSX.Element => (
  <Div id={id}>
    {render(children)}
  </Div>
)

export default TwoByOne
