export function range(start: number, end: number, step: number = 1): Array<number> {
  const result = [start]
  let x = start

  for (;;) {
    x += step
    result.push(x)

    if (x > end) {
      break
    }
  }

  return result
}
