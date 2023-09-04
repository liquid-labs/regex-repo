// Base RE cribbed from: https://github.com/chriso/validator.js via https://stackoverflow.com/a/22648406/929494
// Annotations cribbed from https://gist.github.com/dperini/729294
export const urlReString = '^'
  // protocol ID
  + '(?!mailto:)(?:(?:http|https|ftp)://)'
  // user + pass
  + '(?:\\S+(?::\\S*)?@)?'
  // IP address dotted notation octets
// excludes loopback network 0.0.0.0
// excludes reserved space >= 224.0.0.0
// excludes network & broacast addresses
// (first & last IP address of each class)
  + '(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])'
  + '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}'
  + '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$'
export const url =
  new RegExp(urlReString, 'i')

// TODO: properly support all domain names https://github.com/liquid-labs/regex-repo/issues/3
const preDomainBit = '(?:[a-zA-Z0-9._+-]|%[1-35-9][0-9]|%4[1-9]|%[a-zA-Z])+'
const domainBit = '[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'
export const emailReString = `^${preDomainBit}@${domainBit}$`
export const email = new RegExp(emailReString, 'i')

export const emailEncodedOrNotReString = `^${preDomainBit}(?:@|%40)${domainBit}$`
export const emailEncodedOrNot = new RegExp(emailEncodedOrNotReString)
