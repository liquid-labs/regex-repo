import * as pre from './css-color-data'
import { lockdownRe } from './lib'
import {
  floatStr,
  zeroTo255Str,
  zeroTo1FloatStr,
  zeroTo100PercentStr,
  zeroTo100FloatPercentStr,
  zeroTo255FloatStr,
  zeroTo360Str } from './numbers-strings'

// supports latest rgba hex
const hexColorStr = '#([a-f0-9]{6}|[a-f0-9]{8}|[a-f0-9]{3,4})'
export const hexColor = lockdownRe(hexColorStr, 'i')
export const hexColor1 = lockdownRe('#([a-f0-9]{6}|[a-f0-9]{3})', 'i')

export const cssPreColors1 = lockdownRe(Object.keys(pre.cssPreColors1), 'i')
export const cssPreColors2 = lockdownRe(Object.keys(pre.cssPreColors2), 'i')
export const cssPreColors3 = lockdownRe(Object.keys(pre.cssPreColors3), 'i')
export const cssPreColors = lockdownRe(Object.keys(pre.cssPreColors), 'i')

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
export const rgb = lockdownRe(`rgba?\\((${rgbDecFuncStr}|${rgbPercFuncStr}|${rgbDecSpaceStr}|${rgbPercSpaceStr})\\s*\\)`)

const hsl3BaseStr = `\\s*${zeroTo360Str}(deg)?\\s*(,\\s*${zeroTo100PercentStr}\\s*)`
export const hsl3 = lockdownRe([`hsl\\(${hsl3BaseStr}{2}\\)`, `hsla\\(${hsl3BaseStr}{3}\\)`])
export const hsl = lockdownRe(`hsla?\\(\\s*${floatStr}(deg|grad|rad|turn)?\\s*(,\\s*${zeroTo100FloatPercentStr}\\s*){2,3}\\)`)
