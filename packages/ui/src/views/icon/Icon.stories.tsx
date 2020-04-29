import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Icon from './Icon'

export default {
  component: Icon,
  title: 'Icon',
  decorators: [withKnobs],
}

export const withIcon = (): JSX.Element => (
  <Icon
    src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png"
  />
)
