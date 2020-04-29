import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import styled from '@emotion/styled'

import { title, description } from '../../utils/texts'
import Navbar from './Navbar'
import Hero from '../../blocks/hero/Hero'
import Content from '../../blocks/content/Content'

export default {
  component: Navbar,
  title: 'Navigation Bar',
  decorators: [withKnobs],
}

const Container = styled.nav`
  position: relative;
  display: block;
  width: 100%;
  min-height: 4rem;
  background: red;
`

export const regular = (): JSX.Element => (
  <>
    <Navbar
      type="REGULAR"
      contentId="content"
    >
      <Container />
    </Navbar>
    <Content id="content">
      <Hero>
        <h1>{title}</h1>
        <p>{description(50)}</p>
      </Hero>
      <h1>{title}</h1>
      <p>{description(5000)}</p>
    </Content>
  </>
)

export const fixed = (): JSX.Element => (
  <>
    <Navbar
      type="FIXED"
      contentId="content"
    >
      <Container />
    </Navbar>
    <Content id="content">
      <Hero>
        <h1>{title}</h1>
        <p>{description(50)}</p>
      </Hero>
      <h1>{title}</h1>
      <p>{description(5000)}</p>
    </Content>
  </>
)

export const scroll = (): JSX.Element => (
  <>
    <Navbar
      type="SCROLL"
      contentId="content"
    >
      <Container />
    </Navbar>
    <Content id="content">
      <Hero>
        <h1>{title}</h1>
        <p>{description(50)}</p>
      </Hero>
      <h1>{title}</h1>
      <p>{description(5000)}</p>
    </Content>
  </>
)

export const multiple = (): JSX.Element => (
  <>
    <Navbar
      type="SCROLL"
      contentId="content"
    >
      <Container />
    </Navbar>
    <Navbar
      type="SCROLL"
      id="content"
    >
      <Container />
    </Navbar>
    <Content>
      <Hero>
        <h1>{title}</h1>
        <p>{description(50)}</p>
      </Hero>
      <h1>{title}</h1>
      <p>{description(5000)}</p>
    </Content>
  </>
)

export const multiple2 = (): JSX.Element => (
  <>
    <Navbar
      type="FIXED"
      contentId="scroll"
    >
      <Container />
    </Navbar>
    <Navbar
      id="scroll"
      type="SCROLL"
      contentId="content"
    >
      <Container />
    </Navbar>
    <Content id="content">
      <Hero>
        <h1>{title}</h1>
        <p>{description(50)}</p>
      </Hero>
      <h1>{title}</h1>
      <p>{description(5000)}</p>
    </Content>
  </>
)
