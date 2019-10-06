export const range = (start, end, step) => {
  const numbers = []
  const interval = Math.abs(step) || 1

  if (start < end && step <= 0) return []
  if (start > end && step >= 0) return []

  if (start < end) {
    for (let i = start; i <= end; i += interval) {
      numbers.push(i)
    }
  } else {
    for (let i = start; i >= end; i -= interval) {
      numbers.push(i)
    }
  }

  return numbers
}

export const sum = numbers => {
  if (typeof numbers === 'number') return numbers

  return Array.isArray(numbers)
    ? numbers.reduce((accum, current) => accum + current, 0)
    : null
}
