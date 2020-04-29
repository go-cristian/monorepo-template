import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { title, description } from '../../utils/texts'
import OneByTwo from './OneByTwo'

export default {
  component: OneByTwo,
  title: 'One By Two',
  decorators: [withKnobs],
}

export const oneByOne = (): JSX.Element => (
  <OneByTwo>
    <div style={{ background: 'red' }}>
      <h1>{text('Left Item Title', title)}</h1>
      <p>{text('Left Item Content', description(50))}</p>
    </div>
    <div style={{ background: 'blue' }}>
      <h1>{text('Right Item Title', title)}</h1>
      <p>{text('Right Item Content', description(50))}</p>
    </div>
    <div>
      <h1>{text('Right Item Title', title)}</h1>
      <p>{text('Right Item Content', description(50))}</p>
    </div>
  </OneByTwo>
)

export const imageWithText = (): JSX.Element => (
  <OneByTwo>
    <img
      src="https://via.placeholder.com/600x600?text=Placeholder"
      alt=""
    />
    <div>
      <h1>{text('Right Item Title', title)}</h1>
      <p>{text('Right Item Content', description(50))}</p>
    </div>
  </OneByTwo>
)
