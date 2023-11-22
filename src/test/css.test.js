/*
Copyright 2023 Liquid Labs LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* globals test, expect */
import { groupTest } from './lib/test-lib'
import * as regex from '../css'
import { validHexColors1, validHexColors, invalidHexColors } from './data/hexColors'
import { validRgb1, validRgba3, invalidRgb1, validRgb, invalidRgb } from './data/rgbColors'
import { validHsl3, invalidHsl3, validHsl, invalidHsl } from './data/hslColors'

groupTest(regex.hexColorNoAlphaRE, validHexColors1, invalidHexColors, 'hexColor1')
groupTest(regex.hexColorAlphaRE, validHexColors, invalidHexColors, 'hexColor')

// since the colors are hard coded, we don't test the while thing; we'd just
// end up replicating the structure or building pointless tests from the same
// structure, we just want to check that the regex gets built.
test('cssPreColors1 matches valid \'red\'', () => {
  expect(regex.cssPreColors1RE.test('red')).toBe(true)
})
test('cssPreColors1 fails to match invalid', () => {
  expect(regex.cssPreColors1RE.test('orange')).toBe(false)
  expect(regex.cssPreColors1RE.test('blueberry')).toBe(false)
})
test('cssPreColors2 matches valid', () => {
  expect(regex.cssPreColors2RE.test('orange')).toBe(true)
})
test('cssPreColors2 fails to match invalid', () => {
  expect(regex.cssPreColors2RE.test('azure')).toBe(false)
})
test('cssPreColors3 matches valid', () => {
  expect(regex.cssPreColors3RE.test('azure')).toBe(true)
})
test('cssPreColors3 fails to match invalid', () => {
  expect(regex.cssPreColors3RE.test('rebeccapurple')).toBe(false)
})
test('cssPreColors matches valid', () => {
  expect(regex.cssPreColorsRE.test('rebeccapurple')).toBe(true)
})
test('cssPreColors fails to match invalid', () => {
  expect(regex.cssPreColorsRE.test('blueberry')).toBe(false)
})

groupTest(regex.rgbFuncRE, validRgb1, invalidRgb1, 'rgb')
groupTest(regex.rgbaFuncRE, validRgba3, invalidRgb1, 'rgba3') // note, same invalid group
groupTest(regex.rgbRE, validRgb, invalidRgb, 'rgb')

groupTest(regex.hsl3RE, validHsl3, invalidHsl3, 'hsl3')
groupTest(regex.hslRE, validHsl, invalidHsl, 'hsl')

const validCssColors3 = validHexColors1
  .concat(validRgb1)
  .concat(validRgba3)
  .concat(['red', 'orange', 'ghostwhite']) // one from each
  .concat(validHsl3)
const invalidCssColors3 = invalidHexColors
  .concat(invalidRgb1)
  .concat(['rebeccapurple'])
  .concat(invalidHsl3)
groupTest(regex.cssColor3RE, validCssColors3, invalidCssColors3, 'cssColors3')

const validCssColors = validHexColors
  .concat(validRgb)
  .concat(['red', 'orange', 'ghostwhite', 'rebeccapurple']) // one from each
  .concat(validHsl)
const invalidCssColors = invalidHexColors
  .concat(invalidRgb)
  .concat(['blueberry'])
  .concat(invalidHsl)
groupTest(regex.cssColorRE, validCssColors, invalidCssColors, 'cssColors')
