import React from 'react'
import styled from '@emotion/styled'
import useBottomScroll from '../../utils/useBottomScroll'

type Props = {
  onBottom: () => void
  children: JSX.Element | JSX.Element[]
}

const Div = styled.div`
  position: relative;
  overflow: scroll;
`

const InfiniteScroll = (props: Props): JSX.Element => {
  const { children, onBottom } = props
  useBottomScroll(onBottom)
  return (
    <Div>
      {children}
    </Div>
  )
}

export default InfiniteScroll
