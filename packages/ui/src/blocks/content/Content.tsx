import React from 'react'
import styled from '@emotion/styled'
import media from '../../utils/media'

export type Props = {
  id?: string;
  children?: JSX.Element | JSX.Element[];
}

const Div = styled.div`
  position: relative;
  display: block;
  height: auto;
  width: 100%;
  padding: 0;

  ${media.md`
    margin: 0 auto;
    width: 40rem;
  `}

  ${media.lg`
    width: 80rem;
  `}
`

const Content = ({ id, children }: Props): JSX.Element => <Div id={id}>{children}</Div>

export default Content
