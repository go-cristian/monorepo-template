const range = (size: number, from = 0): Array<number> => (
  [...Array(size).keys()].map((i) => i + from)
)

export default range
