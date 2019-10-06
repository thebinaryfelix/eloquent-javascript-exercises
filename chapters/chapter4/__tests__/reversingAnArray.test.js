import { reverseArray, reverseArrayInPlace } from '../reversingAnArray'

const originalArray = [1, 2, 3, 4, 5]
const expected = [5, 4, 3, 2, 1]

describe('reverseArray', () => {
  test('preserves the original array', () => {
    expect(reverseArray(originalArray)).toStrictEqual(expected)
    expect(originalArray).toStrictEqual([1, 2, 3, 4, 5])
  })
})

describe('reverseArrayInPlace', () => {
  test('returns undefined', () => {
    expect(reverseArrayInPlace(originalArray)).toBe(undefined)
  })

  test('modifies the original array', () => {
    expect(originalArray).toStrictEqual(expected)
  })
})
