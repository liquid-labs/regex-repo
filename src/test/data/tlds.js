export const goodTLDs = [
  'com',
  'cc',
  'a1b',
  '域',
  'alongtld',
  'abcdefghijklmnopqprsuvwxyzabcdefghijklmnopqprsuvwxyzabcdefghijk', // 63 characters OK
]

export const badTLDs = [
  'a',
  '1a',
  'a-z',
  '-az',
  'az-',
  'abcdefghijklmnopqprsuvwxyzabcdefghijklmnopqprsuvwxyzabcdefghijkl', // 64 characters too much
]
