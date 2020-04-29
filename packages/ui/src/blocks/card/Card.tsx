import React from 'react'
import styled from '@emotion/styled'

const defaultTheme: Theme = {
  background: '#EAEAEA',
}

const Div = styled.div<{theme: Theme}>`
  position: relative;
  background: ${({ theme }): string => theme.background};
  border-radius: 1rem;
  padding: 1rem;
`

export type Props = {
  id?: string;
  children?: JSX.Element | JSX.Element[];
  theme?: Theme;
}

export type Theme = {
  background: string;
}

const Card = (props: Props): JSX.Element => {
  const { id, children, theme = defaultTheme } = props
  return (
    <Div id={id} theme={theme}>
      {children}
    </Div>
  )
}

export default Card
