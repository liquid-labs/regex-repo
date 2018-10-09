import { groupTest } from './lib'
import * as regex from './index'
import { validHexColors1, validHexColors, invalidHexColors } from './test-data/hexColors'
import { validRgb1, validRgba3, invalidRgb1, validRgb, invalidRgb } from './test-data/rgbColors'
import { validHsl3, invalidHsl3, validHsl, invalidHsl } from './test-data/hslColors'

groupTest(regex.hexColor1, validHexColors1, invalidHexColors, 'hexColor1')
groupTest(regex.hexColor, validHexColors, invalidHexColors, 'hexColor')

// since the colors are hard coded, we don't test the while thing; we'd just
// end up replicating the structure or building pointless tests from the same
// structure, we just want to check that the regex gets built.
test(`cssPreColors1 matches valid 'red'`, () => {
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

groupTest(regex.rgb1, validRgb1, invalidRgb1, 'rgb')
groupTest(regex.rgba3, validRgba3, invalidRgb1, 'rgba3') // note, same invalid group
groupTest(regex.rgb, validRgb, invalidRgb, 'rgb')

groupTest(regex.hsl3, validHsl3, invalidHsl3, 'hsl3')
groupTest(regex.hsl, validHsl, invalidHsl, 'hsl')
