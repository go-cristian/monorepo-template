import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'

import { title, description } from '../../utils/texts'
import range from '../../utils/range'

import Staggered from './Staggered'

export default {
  component: Staggered,
  title: 'Staggered',
  decorators: [withKnobs],
}

export const withStaggered = (): JSX.Element => (
  <Staggered>
    {range(number('Grid items', 10)).map((index) => (
      <div key={`item-${index}`}>
        <h1>{title}</h1>
        <p>{description(Math.round(Math.random() * 300))}</p>
      </div>
    ))}
  </Staggered>
)
