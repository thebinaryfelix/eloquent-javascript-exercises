export const arrayToList = array => {
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

export const listToArray = list => {
  let initialElement = list
  const array = []

  while (initialElement !== null) {
    array.push(initialElement.value)
    initialElement = initialElement.rest
  }

  return array
}

export const prepend = (element, list) => {
  return {
    value: element,
    rest: list,
  }
}

export const nth = (list, number) => {
  if (!list) return 'Element does not exist.'

  return number - 1 === 0 && list !== null ? list : nth(list.rest, number - 1)
}
