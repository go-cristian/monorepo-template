import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import styled from '@emotion/styled'
import { title, description } from '../../utils/texts'
import Hero from './Hero'
import Navbar from '../../views/navbar/Navbar'

export default {
  component: Hero,
  title: 'Hero',
  decorators: [withKnobs],
}

const Div = styled.div`
  background: white;
`

export const hero = (): JSX.Element => (
  <>
    <Navbar type="FIXED" contentId="hero">
      <Div>
        <p>Menu</p>
        <p>Navbar</p>
      </Div>
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
