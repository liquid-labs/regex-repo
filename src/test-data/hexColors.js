export const validHexColors1 = [
  '#abc',
  '#AbC',
  '#def',
  '#123',
  '#a45',
  '#6b7',
  '#89c',
  '#abcdef',
  '#AbCdEf',
  '#123456'
]

// allows 4th value for alpha channel in level 4
export const validHexColors = validHexColors1.concat([
  '#abca',
  '#AbCa',
  '#defb',
  '#1233',
  '#abcdefaa',
  '#AbCdEfAa',
  '#12345612'
])

export const invalidHexColors = [
  // no #
  'abc',
  'abcdef',
  // letter out of range
  '#g12',
  '#abcg',
  '#abcdefgg',
  '#abcdef1g',
  // incomplete channel
  '#abcde',
  '#abcdef1',
  // too short
  '#a',
  '#ab'
]
