import { fizzBuzz } from '../fizz-buzz'

describe('fizzBuzz', () => {
  test('returns FizzBuzz for multiples of 3 and 5', () => {
    const result = fizzBuzz()
    const splitted = result.split('\n')
    const number15 = splitted[14]
    const number75 = splitted[74]

    expect(number15).toBe('FizzBuzz')
    expect(number75).toBe('FizzBuzz')
  })

  test('returns Fizz for multiples of 3', () => {
    const result = fizzBuzz()
    const splitted = result.split('\n')
    const number3 = splitted[2]
    const number93 = splitted[92]

    expect(number3).toBe('Fizz')
    expect(number93).toBe('Fizz')
  })

  test('returns Buzz for multiples of 5', () => {
    const result = fizzBuzz()
    const splitted = result.split('\n')
    const number5 = splitted[4]
    const number85 = splitted[84]

    expect(number5).toBe('Buzz')
    expect(number85).toBe('Buzz')
  })

  test('returns the number if no condition is satisfied', () => {
    const result = fizzBuzz()
    const splitted = result.split('\n')
    const number1 = splitted[0]
    const number31 = splitted[30]

    expect(number1).toBe('1')
    expect(number31).toBe('31')
  })
})
