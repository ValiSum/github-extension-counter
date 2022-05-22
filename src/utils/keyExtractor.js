export const keyExtractor = path => {
  const pathArray = path.split('.')

  if (pathArray[1] !== undefined) {
    return pathArray[1]
  }
}
