import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { title, description } from '../../utils/texts'
import Hero from './Hero'

export default {
  component: Hero,
  title: 'Hero',
  decorators: [withKnobs],
}

export const hero = (): JSX.Element => (
  <Hero>
    <h1>{text('Title', title)}</h1>
    <p>{text('Description', description(50))}</p>
  </Hero>
)
