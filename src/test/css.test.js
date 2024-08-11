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

import { groupTest, groupTestPartial } from './lib/test-lib'
import * as regex from '../css'
import { validHexColors1, validHexColors, invalidHexColors } from './data/hexColors'
import { validRgb1, validRgba3, invalidRgb1, validRgb, invalidRgb } from './data/rgbColors'
import { validHsl3, invalidHsl3, validHsl, invalidHsl } from './data/hslColors'

groupTest(regex.hexColorNoAlphaRe, validHexColors1, invalidHexColors, 'hexColor1')
groupTestPartial(regex.hexColorNoAlphaReString, validHexColors1, invalidHexColors, 'hexColor1')

groupTest(regex.hexColorAlphaRe, validHexColors, invalidHexColors, 'hexColor')
groupTestPartial(regex.hexColorAlphaReString, validHexColors, invalidHexColors, 'hexColor')

// since the colors are hard coded, we don't test the while thing; we'd just
// end up replicating the structure or building pointless tests from the same
// structure, we just want to check that the regex gets built.
test('cssPreColors1 matches valid \'red\'', () => {
  expect(regex.cssPreColors1Re.test('red')).toBe(true)
})
test('cssPreColors1 fails to match invalid', () => {
  expect(regex.cssPreColors1Re.test('orange')).toBe(false)
  expect(regex.cssPreColors1Re.test('blueberry')).toBe(false)
})
test('cssPreColors2 matches valid', () => {
  expect(regex.cssPreColors2Re.test('orange')).toBe(true)
})
test('cssPreColors2 fails to match invalid', () => {
  expect(regex.cssPreColors2Re.test('azure')).toBe(false)
})
test('cssPreColors3 matches valid', () => {
  expect(regex.cssPreColors3Re.test('azure')).toBe(true)
})
test('cssPreColors3 fails to match invalid', () => {
  expect(regex.cssPreColors3Re.test('rebeccapurple')).toBe(false)
})
test('cssPreColors matches valid', () => {
  expect(regex.cssPreColorsRe.test('rebeccapurple')).toBe(true)
})
test('cssPreColors fails to match invalid', () => {
  expect(regex.cssPreColorsRe.test('blueberry')).toBe(false)
})

groupTest(regex.rgbFuncRe, validRgb1, invalidRgb1, 'rgb')
groupTestPartial(regex.rgbFuncReString, validRgb1, invalidRgb1, 'rgb')

groupTest(regex.rgbaFuncRe, validRgba3, invalidRgb1, 'rgba3')
groupTestPartial(regex.rgbaFuncReString, validRgba3, invalidRgb1, 'rgba3')

groupTest(regex.rgbRe, validRgb, invalidRgb, 'rgb')
groupTestPartial(regex.rgbReString, validRgb, invalidRgb, 'rgb')

groupTest(regex.hsl3Re, validHsl3, invalidHsl3, 'hsl3')
groupTestPartial(regex.hsl3ReString, validHsl3, invalidHsl3, 'hsl3')

groupTest(regex.hslRe, validHsl, invalidHsl, 'hsl')
groupTestPartial(regex.hslReString, validHsl, invalidHsl, 'hsl')

const validCssColors3 = validHexColors1
  .concat(validRgb1)
  .concat(validRgba3)
  .concat(['red', 'orange', 'ghostwhite']) // one from each
  .concat(validHsl3)
const invalidCssColors3 = invalidHexColors
  .concat(invalidRgb1)
  .concat(['rebeccapurple'])
  .concat(invalidHsl3)
groupTest(regex.cssColor3Re, validCssColors3, invalidCssColors3, 'cssColors3')
groupTestPartial(regex.cssColor3ReString, validCssColors3, invalidCssColors3, 'cssColors3')

const validCssColors = validHexColors
  .concat(validRgb)
  .concat(['red', 'orange', 'ghostwhite', 'rebeccapurple']) // one from each
  .concat(validHsl)
const invalidCssColors = invalidHexColors
  .concat(invalidRgb)
  .concat(['blueberry'])
  .concat(invalidHsl)
groupTest(regex.cssColorRe, validCssColors, invalidCssColors, 'cssColors')
groupTestPartial(regex.cssColorReString, validCssColors, invalidCssColors, 'cssColors')
