import React from 'react'

import FixedNavigation from './FixedNavigation'
import ScrollNavigation from './ScrollNavigation'
import RegularNavigation from './RegularNavigation'

type Props = {
  id?: string;
  children?: JSX.Element | JSX.Element[];
  type: 'FIXED' | 'REGULAR' | 'SCROLL';
  contentId?: string;
}

const TypedNavigation = (props: Props): JSX.Element => {
  const {
    id, contentId, type, children,
  } = props
  switch (type) {
    case 'FIXED':
      return <FixedNavigation id={id} contentId={contentId}>{children}</FixedNavigation>
    case 'SCROLL':
      return <ScrollNavigation id={id} contentId={contentId}>{children}</ScrollNavigation>
    case 'REGULAR':
      return <RegularNavigation id={id}>{children}</RegularNavigation>
    default:
      throw new Error(`Typed navigation not implemented ${type}`)
  }
}

export default TypedNavigation
