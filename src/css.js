import * as pre from './css-color-data'
import { zeroTo255Str, zeroTo1FloatStr, percentStr } from './numbers-strings'

// supports latest rgba hex
const hexColorStr = '^#([a-f0-9]{6}|[a-f0-9]{8}|[a-f0-9]{3,4})$'
export const hexColor = new RegExp(hexColorStr, 'i')
export const hexColor1 = /^#([a-f0-9]{6}|[a-f0-9]{3})$/i

const cssPreColors1Str = '^(' + Object.keys(pre.cssPreColors1).join('|') + ')$'
export const cssPreColors1 = new RegExp(cssPreColors1Str, 'i')
const cssPreColors2Str = '^(' + Object.keys(pre.cssPreColors2).join('|') + ')$'
export const cssPreColors2 = new RegExp(cssPreColors2Str, 'i')
const cssPreColors3Str = '^(' + Object.keys(pre.cssPreColors3).join('|') + ')$'
export const cssPreColors3 = new RegExp(cssPreColors3Str, 'i')
const cssPreColorsStr = '^(' + Object.keys(pre.cssPreColors).join('|') + ')$'
export const cssPreColors = new RegExp(cssPreColorsStr, 'i')

const alphaStr = `(${zeroTo1FloatStr}|${percentStr})`
const rgb1IntStr = `rgb\\((\\s*${zeroTo255Str}\\s*,){2}\\s*${zeroTo255Str}\\s*\\)`
const rgb1PercStr = `rgb\\((\\s*${percentStr}\\s*,){2}\\s*${percentStr}\\s*\\)`
const rgb1Str = `(${rgb1IntStr}|${rgb1PercStr})`
const rgba1IntStr = `rgba\\((\\s*${zeroTo255Str}\\s*,){3}\\s*${alphaStr}\\s*\\)`
const rgba1PercStr = `rgba\\((\\s*${percentStr}\\s*,){3}\\s*${alphaStr}\\s*\\)`
const rgba1Str = `(${rgba1IntStr}|${rgba1PercStr})`
export const rgb1 = new RegExp(rgb1Str)
export const rgba1 = new RegExp(rgba1Str)
// In level 4, rgba is an alias for rgb, supports floats, and space notation
// NOTE: The spec allows float values like '+.25e2%', which cannot be recognized
// via RE and are not supported.
const zeroTo255FloatStr = '(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-4])(\\.[0-9]+)?|255(\\.0+)?)'
const rgbDecFuncStr = `(\\s*${zeroTo255FloatStr}\\s*,){2}\\s*${zeroTo255FloatStr}\\s*(,\\s*${alphaStr}\\s*)?`
const rgbPercFuncStr = `(\\s*${percentStr}\\s*,){2}\\s*${percentStr}\\s*(,\\s*${alphaStr}\\s*)?`
const rgbDecSpaceStr = `(\\s*${zeroTo255FloatStr}\\s+){2}${zeroTo255FloatStr}\\s*(/\\s*${alphaStr}\\s*)?`
const rgbPercSpaceStr = `(\\s*${percentStr}\\s+){2}${percentStr}\\s*(/\\s*${alphaStr}\\s*)?`
export const rgb = new RegExp(`^rgba?\\((${rgbDecFuncStr}|${rgbPercFuncStr}|${rgbDecSpaceStr}|${rgbPercSpaceStr})\\s*\\)$`)
