import React from 'react'
import styled from '@emotion/styled'
import { withKnobs, text } from '@storybook/addon-knobs'

import Backstage from './Backstage'

export default {
  component: Backstage,
  title: 'Backstage',
  decorators: [withKnobs],
}


const Div = styled.div`
  position: relative;
  display: block;
  width: 40rem;
  margin-top: 10rem;
  margin-left: 20rem;
  height: 10rem;
  background: red;
`

export const withBackstage = (): JSX.Element => (
  <div>
    <Backstage>
      <Div />
    </Backstage>
    <h1>{text('Title', 'title')}</h1>
    <p>{text('Description', 'description')}</p>
  </div>
)
