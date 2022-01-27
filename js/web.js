// Base RE cribbed from: https://github.com/chriso/validator.js via https://stackoverflow.com/a/22648406/929494
// Annotations cribbed from https://gist.github.com/dperini/729294
export const url =
  new RegExp('^'
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
    + '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i')

// TODO: properly support all domain names https://github.com/liquid-labs/regex-repo/issues/3
export const email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
