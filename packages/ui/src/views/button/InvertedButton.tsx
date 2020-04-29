import React from 'react'

type Props = {
  text?: string
  onClick?(): void
}

const InvertedButton = ({ text, onClick }: Props): JSX.Element => (
  <button type="button" onClick={onClick}>{text}</button>
)

export default InvertedButton
