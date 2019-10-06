// Pure function
export const reverseArray = (numbers = []) => {
  const reversedArray = []

  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    reversedArray.push(numbers[i])
  }

  return reversedArray
}

// With side-effects
export const reverseArrayInPlace = (numbers = []) => {
  const lastIndex = numbers.length - 1
  const stopIndex = Math.ceil(numbers.length / 2) - 1

  for (let i = 0; i <= stopIndex; i += 1) {
    const currentValue = numbers[i]
    const newValue = numbers[lastIndex - i]
    numbers[i] = newValue
    numbers[lastIndex - i] = currentValue
  }
}
