const arrayToTransform = [1, 2, 3]
const listToTransform = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
}

// Part 1
const arrayToList = array => {
  let list = {}
  const lastIndex = array.length - 1

  for (let i = lastIndex; i >= 0; i -= 1) {
    if (i === lastIndex) {
      list = Object.assign({}, { value: array[i], rest: null })
    } else if (i >= 0) {
      list = Object.assign({}, { value: array[i], rest: list })
    }
  }

  return list
}
console.log(arrayToList(arrayToTransform)) // => { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

// Using while
const listToArray = list => {
  let initialElement = list
  const array = []

  while (initialElement !== null) {
    array.push(initialElement.value)
    initialElement = initialElement.rest
  }

  return array
}
console.log(listToArray(listToTransform)) // [1, 2, 3]

// Part 2
const prepend = (element, list) => {
  return {
    value: element,
    rest: list,
  }
}
console.log(prepend(0, listToTransform)) // => { value: 0, rest: { value: 1, rest: [Object] } }

// Get and element from the list, recursively.
const nth = (list, number) => {
  if (!list) return 'Element does not exist.'

  return number - 1 === 0 && list !== null ? list : nth(list.rest, number - 1)
}
console.log(nth(listToTransform, 3)) // => { value: 3, rest: null }
