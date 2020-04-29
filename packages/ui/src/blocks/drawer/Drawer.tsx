import React from 'react'
import styled from '@emotion/styled'

type Props = {
  open: boolean
  align?: 'left' | 'right'
  onClose?(): void
}

const Div = styled.div<{visible: boolean}>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${({ visible }) => (visible ? '0.9' : '0')};
  background: gray;
  transition: all 0.3s linear;
  transition-delay: ${({ visible }) => (visible ? '0s' : '0.5s')};
`

type ContainerProps = {
  visible: boolean
  toRight: boolean
}

const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${({ toRight }) => (!toRight ? '0' : 'unset')};
  right: ${({ toRight }) => (toRight ? '0' : 'unset')};
  width: 90%;
  background: white;
  transition: 0.5s ease-in-out;
  transition-delay: ${({ visible }) => (visible ? '0.5s' : '0s')};
  transform: ${({ visible, toRight }) => {
    const xTo = toRight ? '100%' : '-100%'
    return (visible ? 'translateX(0%)' : `translateX(${xTo})`)
  }
};
`

const Drawer = ({ open, align }: Props): JSX.Element => (
  <Div visible={open}>
    <Container
      visible={open}
      toRight={align === 'right'}
    />
  </Div>
)

export default Drawer
