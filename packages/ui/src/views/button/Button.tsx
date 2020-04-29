import React from 'react'
import PrimaryButton from './PrimaryButton'
import BorderlessButton from './BorderlessButton'
import InvertedButton from './InvertedButton'

type Props = {
  type?: 'Primary' | 'Inverted' | 'Borderless'
  text?: string
  onClick?(): void
}

const Button = ({
  type,
  text,
  onClick,
}: Props): JSX.Element => {
  switch (type) {
    case 'Inverted':
      return (
        <InvertedButton
          text={text}
          onClick={onClick}
        />
      )
    case 'Borderless':
      return (
        <BorderlessButton
          text={text}
          onClick={onClick}
        />
      )
    default:
      return (
        <PrimaryButton
          text={text}
          onClick={onClick}
        />
      )
  }
}

export default Button
