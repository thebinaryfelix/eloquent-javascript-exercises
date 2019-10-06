import { range, sum } from '../sumOfARange'

describe('range', () => {
  test('returns an array with correct sequence', () => {
    expect(range(1, 5)).toStrictEqual([1, 2, 3, 4, 5])
    expect(range(5, 1)).toStrictEqual([5, 4, 3, 2, 1])
  })

  describe('with steps', () => {
    test('returns array with correct sequence', () => {
      expect(range(1, 5, 2)).toStrictEqual([1, 3, 5])
      expect(range(5, 1, -2)).toStrictEqual([5, 3, 1])
    })

    test('returns empty array for invalid step', () => {
      expect(range(5, 1, 2)).toStrictEqual([])
      expect(range(1, 5, -1)).toStrictEqual([])
    })
  })
})

describe('sum', () => {
  test('sums numbers in array', () => {
    expect(sum(range(1, 10))).toBe(55)
  })

  test('returns the given number', () => {
    expect(sum(10)).toBe(10)
  })

  test('returns null for non array input', () => {
    expect(sum('')).toBe(null)
  })
})
