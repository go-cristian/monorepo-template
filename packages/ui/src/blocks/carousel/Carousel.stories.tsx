import React, { useState, useCallback } from 'react'
import styled from '@emotion/styled'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import range from '../../utils/range'
import { title, description } from '../../utils/texts'
import Carousel, { useCarousel } from './Carousel'

export default {
  component: Carousel,
  title: 'Carousel',
  decorators: [withKnobs],
}

const Div = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
`

const CustomDiv = styled.div`
  width: 75rem;
  height: 45rem;
  margin-left: 2rem;
  padding-right: 45rem;
  overflow: hidden;
  border: 1px solid black;
`

const Buttons = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`

const Circle = styled.div<{color: string}>`
  position: relative;
  width: 16px;
  height: 16px;
  margin: 5px;
  border-radius: 8px;
  background: ${({ color }): string => color};
  border: 1px solid black;
`

const colors = ['white', 'orange', 'red', 'blue']

export const Horizontal = (): JSX.Element => (
  <Div>
    <Carousel
      id="carousel"
      type={boolean('Slide On', true) ? 'SLIDE' : 'OPACITY'}
    >
      {colors.map((color) => (
        <div
          key={color}
          style={{ background: color, height: '100%' }}
        >
          <h1>{title}</h1>
          <p>{description(150)}</p>
        </div>
      ))}
    </Carousel>
  </Div>
)

export const Vertical = (): JSX.Element => (
  <Div>
    <Carousel
      id="carousel"
      vertical
      type={boolean('Slide On', true) ? 'SLIDE' : 'OPACITY'}
    >
      {colors.map((color) => (
        <div
          key={color}
          style={{ background: color, height: '100%' }}
        >
          <h1>{title}</h1>
          <p>{description(150)}</p>
        </div>
      ))}
    </Carousel>
  </Div>
)

export const Custom = (): JSX.Element => (
  <CustomDiv>
    <Carousel
      id="carousel"
      type={boolean('Slide On', true) ? 'SLIDE' : 'OPACITY'}
    >
      {colors.map((color) => (
        <div
          key={color}
          style={{ background: color, height: '100%' }}
        >
          <h1>{title}</h1>
          <p>{description(150)}</p>
        </div>
      ))}
    </Carousel>
  </CustomDiv>
)

export const Indicators = (): JSX.Element => {
  const carousel = useCarousel('carousel')
  const [page, setPage] = useState(0)

  const nextPage = useCallback(() => {
    const newPage = page === carousel.size - 1 ? 0 : page + 1
    setPage(newPage)
  }, [page, carousel])

  const prevPage = useCallback(() => {
    const newPage = page === 0 ? carousel.size - 1 : page - 1
    setPage(newPage)
  }, [page, carousel])

  return (
    <>
      <Div>
        <Carousel
          id="carousel"
          page={page}
          type={boolean('Slide On', true) ? 'SLIDE' : 'OPACITY'}
        >
          {colors.map((color) => (
            <div
              key={color}
              style={{ background: color, height: '100%' }}
            >
              <h1>{title}</h1>
              <p>{description(150)}</p>
            </div>
          ))}
        </Carousel>
      </Div>
      <Buttons>
        <button
          type="button"
          onClick={(): void => prevPage()}
        >
          Prev
        </button>
        {colors.map((color, index) => (
          <Circle color={color} onClick={(): void => setPage(index)} />
        ))}
        <button
          type="button"
          onClick={(): void => nextPage()}
        >
          Next
        </button>
      </Buttons>
    </>
  )
}

export const Infinite = (): JSX.Element => (
  <Div>
    <Carousel
      id="carousel"
      type={boolean('Slide On', true) ? 'SLIDE' : 'OPACITY'}
    >
      {range(1000).map((index) => (
        <div
          key={index}
          style={{ height: '100%' }}
        >
          <p>{index}</p>
        </div>
      ))}
    </Carousel>
  </Div>
)
