import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import InfiniteScroll from './InfiniteScroll'

export default {
  component: InfiniteScroll,
  title: 'InfiniteScroll',
  decorators: [withKnobs],
}

export const WithInfiniteScroll = (): JSX.Element => {
  const [limit, setLimit] = useState(10)
  const items = [...Array(limit)].map((item, index) => index)
  return (
    <InfiniteScroll onBottom={() => setLimit(limit + 10)}>
      {items.map((index) => (
        <div key={index}>
          <h1>{text('Title', 'title')}</h1>
          <p>{text('Description', 'description')}</p>
        </div>
      ))}
    </InfiniteScroll>
  )
}
