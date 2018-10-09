import * as pre from './css-color-data'

// supports latest rgba hex
const hexColorRe = '^#([a-f0-9]{6}|[a-f0-9]{8}|[a-f0-9]{3,4})$'
export const hexColor = new RegExp(hexColorRe, 'i')
export const hexColor1 = /^#([a-f0-9]{6}|[a-f0-9]{3})$/i

const cssPreColors1Re = '^(' + Object.keys(pre.cssPreColors1).join('|') + ')$'
export const cssPreColors1 = new RegExp(cssPreColors1Re, 'i')
const cssPreColors2Re = '^(' + Object.keys(pre.cssPreColors2).join('|') + ')$'
export const cssPreColors2 = new RegExp(cssPreColors2Re, 'i')
const cssPreColors3Re = '^(' + Object.keys(pre.cssPreColors3).join('|') + ')$'
export const cssPreColors3 = new RegExp(cssPreColors3Re, 'i')
const cssPreColorsRe = '^(' + Object.keys(pre.cssPreColors).join('|') + ')$'
export const cssPreColors = new RegExp(cssPreColorsRe, 'i')

const zeroTo255Re = '([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])'
const zeroTo1Re = '(0?\\.[0-9]+|1(\\.0+)?)'
const percentRe = '([0-9]|[1-9][0-9]|100)\\%'
const alphaRe = `(${zeroTo1Re}|${percentRe})`
const rgb1IntRe = `rgb\\((\\s*${zeroTo255Re}\\s*,){2}\\s*${zeroTo255Re}\\s*\\)`
const rgb1PercRe = `rgb\\((\\s*${percentRe}\\s*,){2}\\s*${percentRe}\\s*\\)`
const rgb1Re = `(${rgb1IntRe}|${rgb1PercRe})`
const rgba1IntRe = `rgba\\((\\s*${zeroTo255Re}\\s*,){3}\\s*${alphaRe}\\s*\\)`
const rgba1PercRe = `rgba\\((\\s*${percentRe}\\s*,){3}\\s*${alphaRe}\\s*\\)`
const rgba1Re = `(${rgba1IntRe}|${rgba1PercRe})`
export const rgb1 = new RegExp(rgb1Re)
export const rgba1 = new RegExp(rgba1Re)
// In level 4, rgba is an alias for rgb, supports floats, and space notation
// NOTE: The spec allows float values like '+.25e2%', which cannot be recognized
// via RE and are not supported.
const zeroTo255DecRe = '(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-4])(\\.[0-9]+)?|255(\\.0+)?)'
const rgbDecFuncRe = `(\\s*${zeroTo255DecRe}\\s*,){2}\\s*${zeroTo255DecRe}\\s*(,\\s*${alphaRe}\\s*)?`
const rgbPercFuncRe = `(\\s*${percentRe}\\s*,){2}\\s*${percentRe}\\s*(,\\s*${alphaRe}\\s*)?`
const rgbDecSpaceRe = `(\\s*${zeroTo255DecRe}\\s+){2}${zeroTo255DecRe}\\s*(/\\s*${alphaRe}\\s*)?`
const rgbPercSpaceRe = `(\\s*${percentRe}\\s+){2}${percentRe}\\s*(/\\s*${alphaRe}\\s*)?`
export const rgb = new RegExp(`^rgba?\\((${rgbDecFuncRe}|${rgbPercFuncRe}|${rgbDecSpaceRe}|${rgbPercSpaceRe})\\s*\\)$`)
