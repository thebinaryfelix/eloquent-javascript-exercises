const isEven = number => {
  const absoluteNumber = Math.abs(number)
  if (absoluteNumber === 0) return true
  else if (absoluteNumber === 1) return false
  else {
    return isEven(absoluteNumber - 2)
  }
}

console.log(isEven(50)) // => true
console.log(isEven(75)) // => false
console.log(isEven(-2)) // => true
