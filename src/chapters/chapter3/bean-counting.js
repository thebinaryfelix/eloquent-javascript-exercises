// Part 1
const countBs = (sentence = '') => {
  let Bs = 0
  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === 'B') Bs += 1
  }

  return Bs
}

// Part 2
const countChar = (sentence, char) => {
  let charCount = 0
  const charToCount = String(char)

  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === charToCount) charCount += 1
  }

  return charCount
}

// Part 3
const countBsAgain = (sentence = '') => countChar(sentence, 'B')

console.log(countBsAgain('BBb')) // => 2
