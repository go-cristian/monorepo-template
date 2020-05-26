import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { title, description } from '../../utils/texts'
import Hero from './Hero'
import Navbar from '../../views/navbar/Navbar'

export default {
  component: Hero,
  title: 'Hero',
  decorators: [withKnobs],
}

export const hero = (): JSX.Element => (
  <>
    <Navbar type="FIXED" contentId="hero">
      <div>
        <p>Menu</p>
        <p>Navbar</p>
      </div>
    </Navbar>
    <Hero id="hero">
      <h1>{text('Title', title)}</h1>
      <p>{text('Description', description(50))}</p>
    </Hero>
    <div>
      {description(800)}
    </div>
  </>
)
