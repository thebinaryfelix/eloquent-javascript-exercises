const originalArray = [1, 2, 3, 4, 5]

// Pure function
const reverseArray = (numbers = []) => {
  const reversedArray = []

  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    reversedArray.push(numbers[i])
  }

  return reversedArray
}

// With side-effects
const reverseArrayInPlace = (numbers = []) => {
  const lastIndex = numbers.length - 1
  const stopIndex = Math.ceil(numbers.length / 2) - 1

  for (let i = 0; i <= stopIndex; i += 1) {
    const currentValue = numbers[i]
    const newValue = numbers[lastIndex - i]
    numbers[i] = newValue
    numbers[lastIndex - i] = currentValue
  }
}

// Returns a new array
reverseArray(originalArray) // [5, 4, 3, 2, 1]

// originalArray is not modified
console.log(originalArray) // => [1, 2, 3, 4, 5]

// Does not return anything
reverseArrayInPlace(originalArray)

// originalArray is modified
console.log(originalArray) // => [5, 4, 3, 2, 1]
