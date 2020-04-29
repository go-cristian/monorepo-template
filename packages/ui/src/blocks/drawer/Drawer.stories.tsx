import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import Drawer from './Drawer'

export default {
  component: Drawer,
  title: 'Drawer',
  decorators: [withKnobs],
}

export const withDrawerClosed = (): JSX.Element => (
  <Drawer open={boolean('Open', false)} />
)

export const withDrawerOpen = (): JSX.Element => (
  <Drawer
    open={boolean('Open', true)}
    toRight
  />
)
