import React from 'react'

import './reset.css'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props): JSX.Element => (
  <>
    {children}
  </>
)

export default Layout
