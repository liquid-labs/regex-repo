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
import { lockdownRE } from './lib/lockdown-re'
import {
  floatStr,
  zeroTo255Str,
  zeroTo1FloatStr,
  zeroTo100PercentStr,
  zeroTo100FloatPercentStr,
  zeroTo255FloatStr,
  zeroTo360Str
} from './lib/numbers-strings'

export const hexColorNoAlphaREString = '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
// Colors/CSS: Matches hex specified RGB colors with no alpha channel.
export const hexColorNoAlphaRE = lockdownRE(hexColorNoAlphaREString)

// level 4 adds alpha hex support
export const hexColorAlphaREString = '#([a-fA-F0-9]{6}|[a-fA-F0-9]{8}|[a-fA-F0-9]{3,4})'
// Colors/CSS: Matches hex specified RGBA colors with an alpha channel.
export const hexColorAlphaRE = lockdownRE(hexColorAlphaREString)

export const cssPreColors1REString = '(?:' + Object.keys(pre.cssPreColors1).join('|') + ')'
// Colors/CSS: Matches CSS1 predefined color names.
export const cssPreColors1RE = lockdownRE(cssPreColors1REString)

export const cssPreColors2REString = '(?:' + Object.keys(pre.cssPreColors2).join('|') + ')'
// Colors/CSS: Matches CSS2 predefined color names.
export const cssPreColors2RE = lockdownRE(cssPreColors2REString)

export const cssPreColors3REString = '(?:' + Object.keys(pre.cssPreColors3).join('|') + ')'
// Colors/CSS: Matches CSS3 predefined color names.
export const cssPreColors3RE = lockdownRE(cssPreColors3REString)

export const cssPreColorsREString = '(?:' + Object.keys(pre.cssPreColors).join('|') + ')'
// Colors/CSS: Matches CSS4 predefined color names.
export const cssPreColorsRE = lockdownRE(cssPreColorsREString)

const alphaStr = `(${zeroTo1FloatStr}|${zeroTo100PercentStr})`
const rgb1IntStr = `rgb\\((\\s*${zeroTo255Str}\\s*,){2}\\s*${zeroTo255Str}\\s*\\)`
const rgb1PercStr = `rgb\\((\\s*${zeroTo100PercentStr}\\s*,){2}\\s*${zeroTo100PercentStr}\\s*\\)`
const rgba3IntStr = `rgba\\((\\s*${zeroTo255Str}\\s*,){3}\\s*${alphaStr}\\s*\\)`
const rgba3PercStr = `rgba\\((\\s*${zeroTo100PercentStr}\\s*,){3}\\s*${alphaStr}\\s*\\)`

export const rgbFuncREString = '(?:' + [rgb1IntStr, rgb1PercStr].join('|') + ')'
// Colors/CSS: Matches CSS1 'rgb(...) using '0...255 and percent (integer) notation.
export const rgbFuncRE = lockdownRE(rgbFuncREString)

export const rgbaFuncREString = '(?:' + [rgba3IntStr, rgba3PercStr].join('|') + ')'
// Colors/CSS: Matches CSS3 'rgba(...) using '0...255 and percent (integer) notation.
export const rgbaFuncRE = lockdownRE(rgbaFuncREString)

// In level 4, rgba is an alias for rgb, supports floats, and space notation
// NOTE: The spec allows float values like '+.25e2%', which cannot be recognized
// via RE and are not supported.
const alphaFloatStr = `(${zeroTo1FloatStr}|${zeroTo100FloatPercentStr})`
const rgbDecFuncStr = `(\\s*${zeroTo255FloatStr}\\s*,){2}\\s*${zeroTo255FloatStr}\\s*(,\\s*${alphaFloatStr}\\s*)?`
const rgbPercFuncStr = `(\\s*${zeroTo100FloatPercentStr}\\s*,){2}\\s*${zeroTo100FloatPercentStr}\\s*(,\\s*${alphaFloatStr}\\s*)?`
const rgbDecSpaceStr = `(\\s*${zeroTo255FloatStr}\\s+){2}${zeroTo255FloatStr}\\s*(/\\s*${alphaFloatStr}\\s*)?`
const rgbPercSpaceStr = `(\\s*${zeroTo100FloatPercentStr}\\s+){2}${zeroTo100FloatPercentStr}\\s*(/\\s*${alphaFloatStr}\\s*)?`

export const rgbREString = `rgba?\\((${rgbDecFuncStr}|${rgbPercFuncStr}|${rgbDecSpaceStr}|${rgbPercSpaceStr})\\s*\\)`
// Colors/CSS: Matches CSS4 'rgb(...) and rgba(...) functios  using '0...255 and percent (float) notation.
export const rgbRE = lockdownRE(rgbREString)

const hsl3BaseStr = `\\s*${zeroTo360Str}(deg)?\\s*(,\\s*${zeroTo100PercentStr}\\s*)`
const hsl3Opts = [`hsl\\(${hsl3BaseStr}{2}\\)`, `hsla\\(${hsl3BaseStr}{3}\\)`]

export const hsl3REString = '(?:' + hsl3Opts.join('|') + ')'
// Colors/CSS: Matches CSS3 'hsl(...) and hsla(...) deg and percent notation.
export const hsl3RE = lockdownRE(hsl3REString)

export const hslREString =
  `hsla?\\(\\s*${floatStr}(deg|grad|rad|turn)?\\s*(,\\s*${zeroTo100FloatPercentStr}\\s*){2,3}\\)`
// Colors/CSS: Matches CSS4 'hsl(...) and hsla(...) deg, grad, rad, turn and percent notation.
export const hslRE = lockdownRE(hslREString)

export const cssColor3REString = '(?:'
  + [hexColorNoAlphaREString, rgb1IntStr, rgb1PercStr, rgba3IntStr, rgba3PercStr]
    .concat(Object.keys(pre.cssPreColors3))
    .concat(hsl3Opts)
    .join('|')
  + ')'
// Colors/CSS: Matches CSS3 'hex, rgb, rgba, hsl, and predefined colors.
export const cssColor3RE = lockdownRE(cssColor3REString)

export const cssColorREString = '(?:'
  + [hexColorAlphaREString, rgbREString, hslREString]
    .concat(Object.keys(pre.cssPreColors))
    .join('|')
  + ')'
// Colors/CSS: Matches CSS4 'hex, rgb, rgba, hsl, and predefined colors.
export const cssColorRE = lockdownRE(cssColorREString)
