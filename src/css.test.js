import * as regex from './index'

test('recognize valid hex colors', () => {
  expect(regex.hexColor.test('fb1')).toBe(true)
  expect(regex.hexColor.test('#cd0')).toBe(true)
  expect(regex.hexColor.test('123123')).toBe(true)
  expect(regex.hexColor.test('#41b38c')).toBe(true)
})

test('reject invalid hex colors', () => {
  expect(regex.hexColor.test('g12')).toBe(false)
  expect(regex.hexColor.test('#fffff')).toBe(false)
})
