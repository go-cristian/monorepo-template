import React, {
  useRef, RefObject, useState, useEffect, useCallback,
} from 'react'
import styled from '@emotion/styled'

const SWIPE_THRESHOLD = 50

type Props = {
  id?: string;
  children?: JSX.Element | JSX.Element[];
  page?: number;
  vertical?: boolean;
  slideWidth?: number;
  type?: 'SLIDE' | 'OPACITY';
}

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const SlideItem = styled.div<{
  left: number;
  top: number;
  z: number;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${(props): string => `${props.top}px`};
  left: ${(props): string => `${props.left}px`};
  transition: all .5s;
  z-index: ${(props): string => `${props.z}`};
`

const OpacityItem = styled.div<{
  opacity: number;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${({ opacity }): string => `${opacity}`};
  transition: all .5s;
`

type State = {
  size: number;
  page: number;
}

const listeners: Array<React.Dispatch<React.SetStateAction<State>>> = []

export const useCarousel = (id: string): State => {
  const [state, setState] = useState<State>({ size: 0, page: 0 })
  useEffect(() => {
    listeners[id] = setState
    return (): void => {
      delete listeners[id]
    }
  }, [id])
  return state
}

type Metrics = { width: number; height: number}

const arrayFrom = (children: JSX.Element | JSX.Element[]): JSX.Element[] => {
  if ((children as JSX.Element[]).length) {
    return (children as JSX.Element[])
  }
  return [children as JSX.Element]
}

const metricsOf = (ref?: RefObject<HTMLDivElement>): Metrics => {
  if (!ref || !ref.current) return ({ width: 0, height: 0 })
  const { current } = ref
  const { clientWidth, clientHeight } = current
  return ({ width: clientWidth, height: clientHeight })
}

class Point {
  readonly x: number

  readonly y: number

  constructor(event: TouchEvent | MouseEvent) {
    if ((event as TouchEvent).touches) {
      const touchEvent = (event as TouchEvent).touches[0]
      this.x = touchEvent.clientX
      this.y = touchEvent.clientY
    } else if ((event as MouseEvent).pageX) {
      const mouseEvent = (event as WheelEvent)
      this.x = mouseEvent.pageX
      this.y = mouseEvent.pageY
    } else {
      this.x = 0
      this.y = 0
    }
  }

  distanceXWith(point: Point | null): number {
    if (point) return point.x - this.x
    return 0
  }

  distanceYWith(point: Point | null): number {
    if (point) return point.y - this.y
    return 0
  }
}

const diffFrom = (index: number, page: number, total: number): number => {
  const middle = Math.floor(total / 2)
  const inLimit = Math.abs(index - page) <= middle
  if (!inLimit) {
    if (index > page + middle) {
      return (index - total) - page
    }
    return index + (total - page)
  }
  return index - page
}

const zIndexFrom = (index: number, page: number, total: number): number => {
  if (index === page) {
    return 3
  }
  if (index + 1 === page) {
    return 1
  }
  if (index - 1 === page) {
    return 2
  }
  if (page === total - 1 && index === 0) {
    return 1
  }
  if (page === 0 && index === total - 1) {
    return 2
  }
  return 0
}

const opacityFrom = (vertical: boolean, top: number, left: number): number => {
  if (vertical) return top === 0 ? 1 : 0
  return left === 0 ? 1 : 0
}

const Carousel = (props: Props): JSX.Element => {
  const {
    id, page = 0, type = 'SLIDE', vertical = false, children,
  } = props
  const ref = useRef<HTMLDivElement>(null)
  const [metrics, setMetrics] = useState({ width: 0, height: 0 })
  const [current, setPage] = useState(page)
  const [initialPoint, setInitialPoint] = useState<Point | null>(null)

  const allChildren = arrayFrom(children)
  const size = allChildren.length

  useEffect(() => {
    if (listeners[id]) listeners[id]({ page, size })
  }, [current, size, id, page])

  useEffect(() => {
    setPage(page)
  }, [page])

  const moveTo = useCallback((point: Point): void => {
    const difference = vertical
      ? point.distanceYWith(initialPoint)
      : point.distanceXWith(initialPoint)
    if (difference > SWIPE_THRESHOLD) {
      setInitialPoint(null)
      const newPage = current === size - 1 ? 0 : current + 1
      setPage(newPage)
    } else if (difference < -SWIPE_THRESHOLD) {
      setInitialPoint(null)
      const newPage = current === 0 ? size - 1 : current - 1
      setPage(newPage)
    }
  }, [size, initialPoint, current, vertical])

  const onTouchStart = useCallback((event: TouchEvent): void => {
    event.stopPropagation()
    const point = new Point(event)
    setInitialPoint(point)
  }, [])

  const onTouchMove = useCallback((event: TouchEvent): void => {
    event.stopPropagation()
    const point = new Point(event)
    moveTo(point)
  }, [moveTo])

  const onMouseDown = useCallback((event: MouseEvent): void => {
    event.stopPropagation()
    const point = new Point(event)
    setInitialPoint(point)
  }, [])

  const onMouseMove = useCallback((event: MouseEvent): void => {
    event.stopPropagation()
    const point = new Point(event)
    moveTo(point)
  }, [moveTo])

  useEffect(() => {
    const currentRef = ref && ref.current ? ref.current : null
    if (currentRef) {
      const newMetrics = metricsOf(ref)
      currentRef.addEventListener('mousedown', onMouseDown, false)
      currentRef.addEventListener('mousemove', onMouseMove, false)
      currentRef.addEventListener('touchstart', onTouchStart, false)
      currentRef.addEventListener('touchmove', onTouchMove, false)
      setMetrics(newMetrics)
    }

    return (): void => {
      if (currentRef) {
        currentRef.removeEventListener('mousedown', onMouseDown, false)
        currentRef.removeEventListener('mousemove', onMouseMove, false)
        currentRef.removeEventListener('touchstart', onTouchStart, false)
        currentRef.removeEventListener('touchmove', onTouchMove, false)
      }
    }
  }, [ref, onMouseDown, onMouseMove, onTouchStart, onTouchMove])

  return (
    <Div id={id} ref={ref}>
      {allChildren.map((child, index) => {
        const diff = diffFrom(index, current, size)
        const zIndex = zIndexFrom(index, current, size)
        const top = diff * metrics.height
        const left = diff * metrics.width
        const opacity = opacityFrom(vertical, top, left)
        switch (type) {
          case 'SLIDE':
            return (
              <SlideItem
                // eslint-disable-next-line react/no-array-index-key
                key={`item-${index}`}
                left={vertical ? 0 : left}
                top={vertical ? top : 0}
                z={zIndex}
              >
                {child}
              </SlideItem>
            )
          case 'OPACITY':
            return (
              <OpacityItem
                // eslint-disable-next-line react/no-array-index-key
                key={`item-${index}`}
                opacity={opacity}
              >
                {child}
              </OpacityItem>
            )
          default:
            throw new Error(`Item type not implemented on carousel ${type}`)
        }
      })}
    </Div>
  )
}

export default Carousel
