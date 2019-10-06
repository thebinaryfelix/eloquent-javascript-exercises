import { deepEqual } from '../deepComparison'

describe('deepEqual', () => {
  test('compares numbers', () => {
    expect(deepEqual(1, 1)).toBe(true)
    expect(deepEqual(1, 2)).toBe(false)
  })

  test('compares strings', () => {
    expect(deepEqual('abcd', 'abcd')).toBe(true)
    expect(deepEqual('abcd', 'asdf')).toBe(false)
  })

  test('compares null values', () => {
    expect(deepEqual(null, null)).toBe(true)
    expect(deepEqual({}, null)).toBe(false)
    expect(deepEqual([], null)).toBe(false)
  })

  test('compares arrays', () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true)
    expect(deepEqual([1, 2, null], [1, 2, null])).toBe(true)

    expect(deepEqual([1, null, 3], [1, 2, null])).toBe(false)
    expect(deepEqual([1, 2, 3], [1, 3])).toBe(false)
    expect(deepEqual([1, 2, 2], [1, 2, 3])).toBe(false)
  })

  test('compares shallow objects', () => {
    const obj1 = {
      key: 'value',
    }
    const obj2 = {
      key: 'value',
    }
    expect(deepEqual(obj1, obj2)).toBe(true)
  })

  test('compares nested objects', () => {
    const obj1 = {
      key1: 'value1',
      0: {
        key11: 'value11',
        key22: {
          key111: 'value3',
        },
      },
    }
    const obj2 = {
      key1: 'value1',
      0: {
        key11: 'value11',
        key22: {
          key111: 'value3',
        },
      },
    }
    const obj3 = {
      key1: 'value1',
      1: {
        key11: 'value11',
        key22: {
          key111: 'value',
        },
      },
    }

    expect(deepEqual(obj1, obj2)).toBe(true)
    expect(deepEqual(obj1, obj3)).toBe(false)
  })
})
