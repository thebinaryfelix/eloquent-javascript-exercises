import { min } from '../minimum'

test('returns smallest number', () => {
  expect(min(5, 6)).toBe(5)
  expect(min(5, 5)).toBe(5)
  expect(min(100, 30)).toBe(30)
})
