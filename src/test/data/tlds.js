export const goodTLDs = [
  'com',
  'cc',
  '域',
  'alongtld',
  'abcdefghijklmnopqprsuvwxyzabcdefghijklmnopqprsuvwxyzabcdefghijk' // 63 characters OK
]

export const badTLDs = [
  'a',
  'a1b',
  '1a',
  'a-z',
  '-az',
  'az-',
  'abcdefghijklmnopqprsuvwxyzabcdefghijklmnopqprsuvwxyzabcdefghijkl' // 64 characters too much
]
