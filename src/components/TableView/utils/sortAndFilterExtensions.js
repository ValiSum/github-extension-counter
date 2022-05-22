import { OPTION_VALUES } from '../../../constants'

export const sortAndFilterExtensions = state => {
  const {
    extensions,
    filterValue,
    sortValues: { quantity, extension },
  } = state
  let extensionsArray = Object.entries(extensions)

  if (filterValue) {
    extensionsArray = filterExtensions(extensionsArray, filterValue)
  }

  if (Boolean(quantity.length > 0)) {
    extensionsArray = sortByQuantity(extensionsArray, quantity)
  }

  if (Boolean(extension.length > 0)) {
    extensionsArray = sortByExtension(extensionsArray, extension)
  }

  return extensionsArray
}

const filterExtensions = (extensionsArray, filterValue) =>
  extensionsArray.filter(([key]) => key.includes(filterValue))

const sortByQuantity = (extensionsArray, quantity) => {
  if (quantity === OPTION_VALUES.asc) {
    return extensionsArray.sort(([, a], [, b]) => a - b)
  }

  if (quantity === OPTION_VALUES.desc) {
    return extensionsArray.sort(([, a], [, b]) => b - a)
  }
}

const sortByExtension = (extensionsArray, extension) => {
  if (extension === OPTION_VALUES.asc) {
    return extensionsArray.sort()
  }

  if (extension === OPTION_VALUES.desc) {
    return extensionsArray.sort().reverse()
  }
}
