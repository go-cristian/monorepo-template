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
  width: calc(100% - 16);
  padding: 0;
  margin: 16px;

  ${media.md`
    margin: 16px auto;
    width: calc(1024px - 32px);
  `}
`

const Content = ({ id, children }: Props): JSX.Element => <Div id={id}>{children}</Div>

export default Content
