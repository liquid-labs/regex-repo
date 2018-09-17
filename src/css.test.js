import { hexColor } from './css'

test('recognize valid hex colors', () => {
  expect(hexColor.test('fb1')).toBe(true)
  expect(hexColor.test('#cd0')).toBe(true)
  expect(hexColor.test('123123')).toBe(true)
  expect(hexColor.test('#41b38c')).toBe(true)
})

test('reject invalid hex colors', () => {
  expect(hexColor.test('g12')).toBe(false)
  expect(hexColor.test('#fffff')).toBe(false)
})
