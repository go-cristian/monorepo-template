import React from 'react'
import styled from '@emotion/styled'
import media from '../../utils/media'

type Props = {
  id?: string;
  children?: JSX.Element | JSX.Element[];
  inverted?: boolean;
}

const Div = styled.div`
  position: relative;
  height: auto;
  width: 100%;

  ${media.sm`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: minmax(0, 1fr) 1fr;

    * {
      max-width: 100%;
    }
  `}
`

const reducer = (acc: JSX.Element[], val: JSX.Element): JSX.Element[] => acc.concat(val)

const render = (props: Props): JSX.Element => {
  const { inverted, children } = props
  if ((children as JSX.Element[]).length) {
    const all = (children as JSX.Element[]).slice(0, 5).reduce(reducer, [])
    const indexModifier = inverted ? 0 : 1
    return (
      <>
        {!inverted ? all.slice(0, 1) : null}
        <Div>
          {all.slice(indexModifier, 4 + indexModifier)}
        </Div>
        {inverted ? all.slice(4, 5) : null}
      </>
    )
  }
  return (
    <>
      {children}
    </>
  )
}

const OneByFour = ({ id, ...props }: Props): JSX.Element => (
  <Div id={id}>
    {render(props)}
  </Div>
)

export default OneByFour
