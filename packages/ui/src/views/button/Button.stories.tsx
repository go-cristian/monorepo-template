import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from './Button'
import { title } from '../../utils/texts'

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
}

export const withPrimaryButton = (): JSX.Element => (
  <Button
    type="Primary"
    text={text('Item Title', title)}
  />
)

export const withInvertedButton = (): JSX.Element => (
  <Button
    type="Inverted"
    text={text('Item Title', title)}
  />
)

export const withBorderlessButton = (): JSX.Element => (
  <Button
    type="Borderless"
    text={text('Item Title', title)}
  />
)
