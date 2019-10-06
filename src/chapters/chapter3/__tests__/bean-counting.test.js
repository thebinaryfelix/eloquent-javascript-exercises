import { countBs, countChar, countBsAgain } from '../bean-counting'

const sentence = 'Both baBies graB Bottled bunny'

describe('countBs', () => {
  test("returns number of B's", () => {
    expect(countBs(sentence)).toBe(4)
  })
})

describe('countChar', () => {
  test("returns number of B's", () => {
    expect(countChar(sentence, 'a')).toBe(2)
  })
})

describe('countBsAgain', () => {
  test("returns number of B's", () => {
    expect(countBsAgain(sentence)).toBe(4)
  })
})
