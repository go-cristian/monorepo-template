import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { title, description } from '../../utils/texts'
import Card from './Card'

export default {
  component: Card,
  title: 'Card',
  decorators: [withKnobs],
}

const light = {
  background: 'gray',
}

export const Regular = (): JSX.Element => (
  <Card theme={light}>
    <h1>{title}</h1>
    <p>{description(150)}</p>
  </Card>
)
