export const deepEqual = (a, b) => {
  if (typeof a !== 'object' && typeof b !== 'object') return a === b
  if (a === null && b === null) return true
  if (a === null || b === null) return false

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  if (keysA.length !== keysB.length) return false

  for (let i = 0; i < keysA.length; i += 1) {
    const currentKeyA = keysA[i]
    const currentKeyB = keysB[i]
    if (!deepEqual(a[currentKeyA], b[currentKeyB])) return false
  }
  return true
}
