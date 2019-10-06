import { isEven } from '../recursion'

test('checks if number is even', () => {
  expect(isEven(50)).toBe(true)
  expect(isEven(75)).toBe(false)
  expect(isEven(-2)).toBe(true)
})
