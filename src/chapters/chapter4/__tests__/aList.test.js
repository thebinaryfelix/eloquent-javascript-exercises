import { arrayToList, listToArray, prepend, nth } from '../aList'

const chainedList = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
}

describe('arrayToList', () => {
  test('transforms array in a chained list', () => {
    const expectedResult = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null,
        },
      },
    }

    expect(arrayToList([1, 2, 3])).toStrictEqual(expectedResult)
  })
})

describe('listToArray', () => {
  test('transforms chained list in array', () => {
    expect(listToArray(chainedList)).toStrictEqual([1, 2, 3])
  })
})

describe('prepend', () => {
  test('inserts element to beginning of list', () => {
    const expectedResult = {
      value: 0,
      rest: {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null,
          },
        },
      },
    }
    expect(prepend(0, chainedList)).toStrictEqual(expectedResult)
  })
})

describe('nth', () => {
  test('gets an element from the list, recursively.', () => {
    const expectedResult = {
      value: 3,
      rest: null,
    }

    expect(nth(chainedList, 3)).toStrictEqual(expectedResult)
  })
})
