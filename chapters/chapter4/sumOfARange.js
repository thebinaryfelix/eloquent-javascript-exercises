// Part 1
const range = (start, end, step = 1) => {
  const numbers = []
  const interval = Math.abs(step)

  if (!step) return []

  if (step > 0) {
    if (start < end) {
      for (let i = start; i <= end; i += interval) {
        numbers.push(i)
      }
    } else {
      for (let i = end; i >= start; i -= interval) {
        numbers.push(i)
      }
    }
  } else {
    for (let i = start; i >= end; i -= interval) {
      numbers.push(i)
    }
  }

  return numbers
}

// Part 2
const sum = numbers => numbers.reduce((accum, current) => accum + current, 0)

console.log(sum(range(1, 10))) // => 55
