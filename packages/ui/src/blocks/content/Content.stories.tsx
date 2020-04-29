import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { title, description } from '../../utils/texts'
import Content from './Content'

export default {
  component: Content,
  title: 'Content',
  decorators: [withKnobs],
}

export const content = (): JSX.Element => (
  <Content>
    <h1>{text('Title', title)}</h1>
    <p>{text('Description', description(5000))}</p>
  </Content>
)
