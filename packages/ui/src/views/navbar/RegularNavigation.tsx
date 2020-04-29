import React from 'react'
import styled from '@emotion/styled'

type Props = {
  id?: string;
  children?: JSX.Element | JSX.Element[];
  contentId?: string;
}

const Div = styled.div``

const RegularNavigation = ({ id, children }: Props): JSX.Element => <Div id={id}>{children}</Div>


export default RegularNavigation
