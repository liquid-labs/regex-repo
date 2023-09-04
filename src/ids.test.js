/* globals test, expect */
import * as regex from './index'

const trivial0 = '00000000-0000-1000-8000-000000000000'
const invalidUuid = '00000000-0000-0000-0000-000000000000'

test('trivial (all 0) UUID is valid', () => {
  expect(regex.uuid.test(trivial0)).toBe(true)
})

test('recognize invalid UUID', () => {
  expect(regex.uuid.test(invalidUuid)).toBe(false)
})
