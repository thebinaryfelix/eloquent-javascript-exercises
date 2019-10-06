export const isEven = number => {
  const absoluteNumber = Math.abs(number)
  if (absoluteNumber === 0) return true
  else if (absoluteNumber === 1) return false
  else {
    return isEven(absoluteNumber - 2)
  }
}
