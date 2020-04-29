import React from 'react'
import styled from '@emotion/styled'
import media from '../../utils/media'

export type Props = {
  id?: string;
  children?: JSX.Element | JSX.Element[];
}

const Div = styled.div`
  position: relative;
  display: grid;
  height: auto;
  width: 100%;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  ${media.sm`
    grid-template-columns: 1fr 1fr;
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
