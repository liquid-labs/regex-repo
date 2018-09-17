import { uuidRe } from './ids'

const trivial0 = '00000000-0000-1000-8000-000000000000'
const invalidUuid = '00000000-0000-0000-0000-000000000000'

test('trivial (all 0) UUID is valid', () => {
  expect(uuidRe.test(trivial0)).toBe(true)
})

test('recognize invalid UUID', () => {
  expect(uuidRe.test(invalidUuid)).toBe(false)
})
