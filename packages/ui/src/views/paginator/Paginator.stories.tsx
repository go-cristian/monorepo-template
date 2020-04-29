import React, { useState } from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Paginator from './Paginator'

export default {
  component: Paginator,
  title: 'Paginator',
  decorators: [withKnobs],
}

export const WithPaginator = (): JSX.Element => {
  const [page, setPage] = useState(0)
  return (
    <Paginator
      page={page}
      pages={10}
      onSelection={(newPage) => setPage(newPage)}
      onNext={(newPage) => setPage(newPage)}
      onPrevious={(newPage) => setPage(newPage)}
    />
  )
}
