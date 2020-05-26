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
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  `}

  ${media.md`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`

const Grid = ({ id, children }: Props): JSX.Element => (
  <Div id={id}>
    {children}
  </Div>
)

export default Grid
