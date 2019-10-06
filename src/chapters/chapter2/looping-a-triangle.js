export const loopATriangle = (n, char = '#') => {
  let charToRepeat = String(char)
  let output = ''
  for (let i = 1; i <= n; i += 1) {
    output += `${charToRepeat.repeat(i)}\n`
  }
  return output
}
