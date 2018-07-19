const { uuidRe } = require('./ids')

const trivial0 = '00000000-0000-1000-8000-000000000000'

test('trivial (all 0) UUID is valid', () => {
  expect(uuidRe.test(trivial0)).toBe(true)
})