import React from 'react'
import { text } from '@storybook/addon-knobs'

import { title, description } from '../../utils/texts'
import TwoByOne from './TwoByOne'

export default {
  component: TwoByOne,
  title: 'Two By One',
}

export const twoByOne = (): JSX.Element => (
  <TwoByOne>
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
  </TwoByOne>
)

export const imageWithText = (): JSX.Element => (
  <TwoByOne>
    <img
      src="https://via.placeholder.com/600x600?text=Placeholder"
      alt=""
    />
    <div>
      <h1>{text('Right Item Title', title)}</h1>
      <p>{text('Right Item Content', description(50))}</p>
    </div>
  </TwoByOne>
)
