export const chessBoard = (size = 2) => {
  let board = ''
  const lineSize = size / 2
  const oddLines = '# '
  const evenLines = ' #'

  for (let i = 1; i <= size; i += 1) {
    board +=
      i % 2 !== 0
        ? `${oddLines.repeat(lineSize)}\n`
        : `${evenLines.repeat(lineSize)}\n`
  }

  console.log(board.trim())
}

chessBoard(8)
