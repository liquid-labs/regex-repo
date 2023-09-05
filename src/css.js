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

import * as pre from './css-color-data'
import { lockdownRe } from './lib'
import {
  floatStr,
  zeroTo255Str,
  zeroTo1FloatStr,
  zeroTo100PercentStr,
  zeroTo100FloatPercentStr,
  zeroTo255FloatStr,
  zeroTo360Str
} from './numbers-strings'

const hexColor1Str = '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
export const hexColor1 = lockdownRe(hexColor1Str)
// level 4 adds alpha hex support
const hexColorStr = '#([a-fA-F0-9]{6}|[a-fA-F0-9]{8}|[a-fA-F0-9]{3,4})'
export const hexColor = lockdownRe(hexColorStr)

export const cssPreColors1 = lockdownRe(Object.keys(pre.cssPreColors1))
export const cssPreColors2 = lockdownRe(Object.keys(pre.cssPreColors2))
export const cssPreColors3 = lockdownRe(Object.keys(pre.cssPreColors3))
export const cssPreColors = lockdownRe(Object.keys(pre.cssPreColors))

const alphaStr = `(${zeroTo1FloatStr}|${zeroTo100PercentStr})`
const rgb1IntStr = `rgb\\((\\s*${zeroTo255Str}\\s*,){2}\\s*${zeroTo255Str}\\s*\\)`
const rgb1PercStr = `rgb\\((\\s*${zeroTo100PercentStr}\\s*,){2}\\s*${zeroTo100PercentStr}\\s*\\)`
const rgba3IntStr = `rgba\\((\\s*${zeroTo255Str}\\s*,){3}\\s*${alphaStr}\\s*\\)`
const rgba3PercStr = `rgba\\((\\s*${zeroTo100PercentStr}\\s*,){3}\\s*${alphaStr}\\s*\\)`
export const rgb1 = lockdownRe([rgb1IntStr, rgb1PercStr])
export const rgba3 = lockdownRe([rgba3IntStr, rgba3PercStr])
// In level 4, rgba is an alias for rgb, supports floats, and space notation
// NOTE: The spec allows float values like '+.25e2%', which cannot be recognized
// via RE and are not supported.
const alphaFloatStr = `(${zeroTo1FloatStr}|${zeroTo100FloatPercentStr})`
const rgbDecFuncStr = `(\\s*${zeroTo255FloatStr}\\s*,){2}\\s*${zeroTo255FloatStr}\\s*(,\\s*${alphaFloatStr}\\s*)?`
const rgbPercFuncStr = `(\\s*${zeroTo100FloatPercentStr}\\s*,){2}\\s*${zeroTo100FloatPercentStr}\\s*(,\\s*${alphaFloatStr}\\s*)?`
const rgbDecSpaceStr = `(\\s*${zeroTo255FloatStr}\\s+){2}${zeroTo255FloatStr}\\s*(/\\s*${alphaFloatStr}\\s*)?`
const rgbPercSpaceStr = `(\\s*${zeroTo100FloatPercentStr}\\s+){2}${zeroTo100FloatPercentStr}\\s*(/\\s*${alphaFloatStr}\\s*)?`
const rgbStr = `rgba?\\((${rgbDecFuncStr}|${rgbPercFuncStr}|${rgbDecSpaceStr}|${rgbPercSpaceStr})\\s*\\)`
export const rgb = lockdownRe(rgbStr)

const hsl3BaseStr = `\\s*${zeroTo360Str}(deg)?\\s*(,\\s*${zeroTo100PercentStr}\\s*)`
const hsl3Opts = [`hsl\\(${hsl3BaseStr}{2}\\)`, `hsla\\(${hsl3BaseStr}{3}\\)`]
export const hsl3 = lockdownRe(hsl3Opts)
const hslStr = `hsla?\\(\\s*${floatStr}(deg|grad|rad|turn)?\\s*(,\\s*${zeroTo100FloatPercentStr}\\s*){2,3}\\)`
export const hsl = lockdownRe(hslStr)

const cssColor3Opts = [hexColor1Str, rgb1IntStr, rgb1PercStr, rgba3IntStr, rgba3PercStr]
  .concat(Object.keys(pre.cssPreColors3))
  .concat(hsl3Opts)
export const cssColor3 = lockdownRe(cssColor3Opts)
const cssColorOpts = [hexColorStr, rgbStr, hslStr]
  .concat(Object.keys(pre.cssPreColors))
export const cssColor = lockdownRe(cssColorOpts)
