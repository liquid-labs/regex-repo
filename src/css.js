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
import * as pre from './lib/css-color-data'
import { lockdownRe } from './lib/lockdown-re'
import {
  floatStr,
  zeroTo255Str,
  zeroTo1FloatStr,
  zeroTo100PercentStr,
  zeroTo100FloatPercentStr,
  zeroTo255FloatStr,
  zeroTo360Str
} from './lib/numbers-strings'

export const hexColorNoAlphaReString = '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'

/**
 * Matches hex specified RGB colors with no alpha channel.
 * @category CSS
 */
export const hexColorNoAlphaRe = lockdownRe(hexColorNoAlphaReString)

// level 4 adds alpha hex support
export const hexColorAlphaReString = '#([a-fA-F0-9]{6}|[a-fA-F0-9]{8}|[a-fA-F0-9]{3,4})'

/**
 * Matches hex specified RGBA colors with an alpha channel.
 * @category CSS
 */
export const hexColorAlphaRe = lockdownRe(hexColorAlphaReString)

export const cssPreColors1ReString = '(?:' + Object.keys(pre.cssPreColors1).join('|') + ')'

/**
 * Matches CSS1 predefined color names.
 * @category CSS
 */
export const cssPreColors1Re = lockdownRe(cssPreColors1ReString)

export const cssPreColors2ReString = '(?:' + Object.keys(pre.cssPreColors2).join('|') + ')'

/**
 * Matches CSS2 predefined color names.
 * @category CSS
 */
export const cssPreColors2Re = lockdownRe(cssPreColors2ReString)

export const cssPreColors3ReString = '(?:' + Object.keys(pre.cssPreColors3).join('|') + ')'

/**
 * Matches CSS3 predefined color names.
 * @category CSS
 */
export const cssPreColors3Re = lockdownRe(cssPreColors3ReString)

export const cssPreColorsReString = '(?:' + Object.keys(pre.cssPreColors).join('|') + ')'

/**
 * Matches CSS4 predefined color names.
 * @category CSS
 */
export const cssPreColorsRe = lockdownRe(cssPreColorsReString)

const alphaStr = `(${zeroTo1FloatStr}|${zeroTo100PercentStr})`
const rgb1IntStr = `rgb\\((\\s*${zeroTo255Str}\\s*,){2}\\s*${zeroTo255Str}\\s*\\)`
const rgb1PercStr = `rgb\\((\\s*${zeroTo100PercentStr}\\s*,){2}\\s*${zeroTo100PercentStr}\\s*\\)`
const rgba3IntStr = `rgba\\((\\s*${zeroTo255Str}\\s*,){3}\\s*${alphaStr}\\s*\\)`
const rgba3PercStr = `rgba\\((\\s*${zeroTo100PercentStr}\\s*,){3}\\s*${alphaStr}\\s*\\)`

export const rgbFuncReString = '(?:' + [rgb1IntStr, rgb1PercStr].join('|') + ')'

/**
 * Matches CSS1 'rgb(...) using '0...255 and percent (integer) notation.
 * @category CSS
 */
export const rgbFuncRe = lockdownRe(rgbFuncReString)

export const rgbaFuncReString = '(?:' + [rgba3IntStr, rgba3PercStr].join('|') + ')'

/**
 * Matches CSS3 'rgba(...) using '0...255 and percent (integer) notation.
 * @category CSS
 */
export const rgbaFuncRe = lockdownRe(rgbaFuncReString)

// In level 4, rgba is an alias for rgb, supports floats, and space notation
// NOTE: The spec allows float values like '+.25e2%', which cannot be recognized
// via Re and are not supported.
const alphaFloatStr = `(${zeroTo1FloatStr}|${zeroTo100FloatPercentStr})`
const rgbDecFuncStr = `(\\s*${zeroTo255FloatStr}\\s*,){2}\\s*${zeroTo255FloatStr}\\s*(,\\s*${alphaFloatStr}\\s*)?`
const rgbPercFuncStr = `(\\s*${zeroTo100FloatPercentStr}\\s*,){2}\\s*${zeroTo100FloatPercentStr}\\s*(,\\s*${alphaFloatStr}\\s*)?`
const rgbDecSpaceStr = `(\\s*${zeroTo255FloatStr}\\s+){2}${zeroTo255FloatStr}\\s*(/\\s*${alphaFloatStr}\\s*)?`
const rgbPercSpaceStr = `(\\s*${zeroTo100FloatPercentStr}\\s+){2}${zeroTo100FloatPercentStr}\\s*(/\\s*${alphaFloatStr}\\s*)?`

export const rgbReString = `rgba?\\((${rgbDecFuncStr}|${rgbPercFuncStr}|${rgbDecSpaceStr}|${rgbPercSpaceStr})\\s*\\)`

/**
 * Matches CSS4 'rgb(...) and rgba(...) functios  using '0...255 and percent (float) notation.
 * @category CSS
 */
export const rgbRe = lockdownRe(rgbReString)

const hsl3BaseStr = `\\s*${zeroTo360Str}(deg)?\\s*(,\\s*${zeroTo100PercentStr}\\s*)`
const hsl3Opts = [`hsl\\(${hsl3BaseStr}{2}\\)`, `hsla\\(${hsl3BaseStr}{3}\\)`]

export const hsl3ReString = '(?:' + hsl3Opts.join('|') + ')'

/**
 * Matches CSS3 'hsl(...) and hsla(...) deg and percent notation.
 * @category CSS
 */
export const hsl3Re = lockdownRe(hsl3ReString)

export const hslReString =
  `hsla?\\(\\s*${floatStr}(deg|grad|rad|turn)?\\s*(,\\s*${zeroTo100FloatPercentStr}\\s*){2,3}\\)`

/**
 * Matches CSS4 'hsl(...) and hsla(...) deg, grad, rad, turn and percent notation.
 * @category CSS
 */
export const hslRe = lockdownRe(hslReString)

export const cssColor3ReString = '(?:'
  + [hexColorNoAlphaReString, rgb1IntStr, rgb1PercStr, rgba3IntStr, rgba3PercStr]
    .concat(Object.keys(pre.cssPreColors3))
    .concat(hsl3Opts)
    .join('|')
    + ')'

/**
 * Matches CSS3 'hex, rgb, rgba, hsl, and predefined colors.
 * @category CSS
 */
export const cssColor3Re = lockdownRe(cssColor3ReString)

export const cssColorReString = '(?:'
  + [hexColorAlphaReString, rgbReString, hslReString]
    .concat(Object.keys(pre.cssPreColors))
    .join('|')
    + ')'

/**
 * Matches CSS4 'hex, rgb, rgba, hsl, and predefined colors.
 * @category CSS
 */
export const cssColorRe = lockdownRe(cssColorReString)
