const loopATriangle = (n, char = '#') => {
  let charToRepeat = String(char)
  for (let i = 1; i <= n; i += 1) {
    console.log(charToRepeat.repeat(i))
  }
}

loopATriangle(5)
