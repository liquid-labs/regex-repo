export const usPhoneReString = '^(\\+?1[._ -]?)?(\\(\\d{3}\\)|\\d{3})[._ -]?\\d{3}[._ -]?\\d{4}$'
export const usPhone = new RegExp(usPhoneReString)
export const zipCodeReString = '^\\d{5}([._ -]?\\d{4})?$'
export const zipCode = new RegExp(zipCodeReString)
