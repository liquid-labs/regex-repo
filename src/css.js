import * as pre from './css-color-data'

// supports latest rgba hex
const hexColorRe = '^#([a-f0-9]{6}|[a-f0-9]{8}|[a-f0-9]{3,4})$'
export const hexColor = new RegExp(hexColorRe, 'i')
export const hexColor1 = /^#([a-f0-9]{6}|[a-f0-9]{3})$/i

const cssPreColors1Re = '^(' + Object.keys(pre.cssPreColors1).join('|') + ')$';
export const cssPreColors1 = new RegExp(cssPreColors1Re, 'i');
const cssPreColors2Re = '^(' + Object.keys(pre.cssPreColors2).join('|') + ')$';
export const cssPreColors2 = new RegExp(cssPreColors2Re, 'i');
const cssPreColors3Re = '^(' + Object.keys(pre.cssPreColors3).join('|') + ')$';
export const cssPreColors3 = new RegExp(cssPreColors3Re, 'i');
const cssPreColorsRe = '^(' + Object.keys(pre.cssPreColors).join('|') + ')$';
export const cssPreColors = new RegExp(cssPreColorsRe, 'i');
