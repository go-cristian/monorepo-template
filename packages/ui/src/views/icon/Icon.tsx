import React from 'react'
import styled from '@emotion/styled'

type Props = {
  src: string;
  id?: string;
  alt?: string;
}

const Img = styled.img`
  position: relative;
  width: 1.6rem;
  height: 1.6rem;
`

const Icon = (props: Props): JSX.Element => {
  const { src, alt } = props
  return (
    <Img src={src} alt={alt} />
  )
}

export default Icon
