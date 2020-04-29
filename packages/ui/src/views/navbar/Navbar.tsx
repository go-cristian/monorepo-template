import React from 'react'

import TypedNavigation from './TypedNavigation'

type Props = {
  id?: string;
  children?: JSX.Element | JSX.Element[];
  type: 'FIXED' | 'REGULAR' | 'SCROLL';
  contentId?: string;
}

const Navbar = (props: Props): JSX.Element => {
  const {
    id, contentId, type, children,
  } = props
  return (
    <TypedNavigation id={id} type={type} contentId={contentId}>
      {children}
    </TypedNavigation>
  )
}

export default Navbar
