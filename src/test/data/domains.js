export const goodDomainNames = [
  '0f',
  'f0',
  'foo',
  'foo-bar',
  'a-bc-d',
  'a--b',
  'abc--d'
]

export const badDomainNames = [
  '-',
  '0',
  'f',
  '-foo',
  'foo-',
  'foo.foo',
  'fo--bar' // cannot have a hyphen in the 3rd and 4th position
]
