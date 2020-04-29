import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import range from '../../utils/range'
import { title, description } from '../../utils/texts'
import OneByFour from './OneByFour'

export default {
  component: OneByFour,
  title: 'OneByFour',
  decorators: [withKnobs],
}

export const regular = (): JSX.Element => (
  <OneByFour>
    <div>
      <h1>Big Title</h1>
      <p>{description(Math.round(Math.random() * 200) + 100)}</p>
    </div>
    {range(4).map(() => (
      <div>
        <h1>{title}</h1>
        <p>{description(Math.round(Math.random() * 200) + 100)}</p>
      </div>
    ))}
  </OneByFour>
)

export const inverted = (): JSX.Element => (
  <OneByFour inverted>
    {range(4).map(() => (
      <div>
        <h1>{title}</h1>
        <p>{description(Math.round(Math.random() * 200) + 100)}</p>
      </div>
    ))}
    <div>
      <h1>Big Title</h1>
      <p>{description(Math.round(Math.random() * 200) + 100)}</p>
    </div>
  </OneByFour>
)
