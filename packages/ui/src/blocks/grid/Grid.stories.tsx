import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import { title, description } from '../../utils/texts'
import range from '../../utils/range'
import Grid from './Grid'

export default {
  component: Grid,
  title: 'Grid',
  decorators: [withKnobs],
}

export const grid = (): JSX.Element => (
  <Grid>
    {range(number('Grid items', 5)).map((index) => (
      <div key={`item-${index}`}>
        <h1>{text('Item Title', title)}</h1>
        <p>{text('Item Content', description(50))}</p>
      </div>
    ))}
  </Grid>
)
