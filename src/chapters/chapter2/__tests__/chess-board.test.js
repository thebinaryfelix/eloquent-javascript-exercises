import { chessBoard } from '../chess-board'

const expectedBoard = '# # \n # #\n# # \n # #\n# #'

describe('chessBoard', () => {
  test('draws a board of passed size', () => {
    expect(chessBoard(5)).toBe(expectedBoard)
  })
})
