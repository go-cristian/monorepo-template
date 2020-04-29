import React from 'react'
import styled from '@emotion/styled'

const range = 3

type Props = {
  page: number
  pages: number
  onSelection?(number): void
  onNext?(number): void
  onPrevious?(number): void
}

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`
const PrevArrow = styled.div`
  padding: 1rem;
  align-self: center;
  cursor: pointer;
`

const NextArrow = styled.div`
  padding: 1rem;
  align-self: center;
  cursor: pointer;
`

const Number = styled.p<{selected: boolean, clickable: boolean}>`
  padding: 1rem;
  align-self: center;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'unset')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'unset')};
`

const Paginator = ({
  page,
  pages,
  onSelection,
  onNext,
  onPrevious,
}: Props): JSX.Element => {
  const totalPages = pages + (2 * range)
  const realPage = page + range
  const lower = realPage - range > 0 ? realPage - range : 0
  const higher = realPage + range + 1 < totalPages ? realPage + range + 1 : totalPages
  const numbers = [...Array(totalPages)]
    .map((item, index) => index - range)
    .slice(lower, higher)
  return (
    <Div>
      <PrevArrow onClick={() => {
        if (page > 0) onPrevious(page - 1)
      }}
      >
        Prev
      </PrevArrow>
      {numbers.map((index) => (
        <Number
          key={index}
          selected={index === page}
          clickable={index >= 0 && index < pages}
          onClick={() => {
            if (index >= 0 && index < pages) onSelection(index)
          }}
        >
          {index >= 0 && index < pages ? (index + 1) : ''}

        </Number>
      ))}
      <NextArrow onClick={() => {
        if (page < pages) onNext(page + 1)
      }}
      >
        Next
      </NextArrow>
    </Div>
  )
}

export default Paginator
