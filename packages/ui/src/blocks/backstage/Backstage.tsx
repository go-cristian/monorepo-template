import React from 'react'
import styled from '@emotion/styled'

type Props = {
  children: JSX.Element | JSX.Element[];
}

const Div = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Backstage = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <Div>
      {children}
    </Div>
  )
}

export default Backstage
