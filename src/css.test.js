import { groupTest } from './testlib'
import * as regex from './index'
import { validHexColors1, validHexColors, invalidHexColors } from './test-data/hexColors'
import { validRgb1, validRgba1, invalidRgb1, validRgb, invalidRgb } from './test-data/rgbColors'

groupTest(regex.hexColor1, validHexColors1, invalidHexColors)
groupTest(regex.hexColor, validHexColors, invalidHexColors)

// since the colors are hard coded, we don't test the while thing; we'd just
// end up replicating the structure or building pointless tests from the same
// structure, we just want to check that the regex gets built.
test('cssPreColors1 matches valid', () => {
  expect(regex.cssPreColors1.test('red')).toBe(true)
})
test('cssPreColors1 fails to match invalid', () => {
  expect(regex.cssPreColors1.test('orange')).toBe(false)
  expect(regex.cssPreColors1.test('blueberry')).toBe(false)
})
test('cssPreColors2 matches valid', () => {
  expect(regex.cssPreColors2.test('orange')).toBe(true)
})
test('cssPreColors2 fails to match invalid', () => {
  expect(regex.cssPreColors2.test('azure')).toBe(false)
})
test('cssPreColors3 matches valid', () => {
  expect(regex.cssPreColors3.test('azure')).toBe(true)
})
test('cssPreColors3 fails to match invalid', () => {
  expect(regex.cssPreColors3.test('rebeccapurple')).toBe(false)
})
test('cssPreColors matches valid', () => {
  expect(regex.cssPreColors.test('rebeccapurple')).toBe(true)
})
test('cssPreColors fails to match invalid', () => {
  expect(regex.cssPreColors.test('blueberry')).toBe(false)
})

groupTest(regex.rgb1, validRgb1, invalidRgb1)
groupTest(regex.rgba1, validRgba1, invalidRgb1) // note, same invalid group
//groupTest(regex.rgb, validRgb, invalidRgb)
