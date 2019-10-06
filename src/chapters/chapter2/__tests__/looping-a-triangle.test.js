import { loopATriangle } from '../looping-a-triangle'

const expectedOutput = '#\n##\n###\n####\n#####\n'

describe('loopATriangle', () => {
  test('draws a triangle of given height', () => {
    expect(loopATriangle(5)).toBe(expectedOutput)
  })
})
