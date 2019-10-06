export const countBs = (sentence = '') => {
  let Bs = 0
  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === 'B') Bs += 1
  }

  return Bs
}

export const countChar = (sentence, char) => {
  let charCount = 0
  const charToCount = String(char)

  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === charToCount) charCount += 1
  }

  return charCount
}

export const countBsAgain = (sentence = '') => countChar(sentence, 'B')
