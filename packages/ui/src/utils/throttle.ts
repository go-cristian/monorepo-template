const throttle = (
  fn: () => void,
  wait: number,
): (() => void
  ) => {
  let time = Date.now()
  const callback = () => {
    if ((time + wait - Date.now()) < 0) {
      fn()
      time = Date.now()
    }
  }
  return callback
}

export default throttle
