// Note, this module is used internally, so these aStr exported to for other
// modules to use, but the file is not Str-exported through index.
export const plainFloatStr = '[+-]?(0(\\.[0-9]+)?|[1-9][0-9]*(\\.[0-9]+)?)'
export const scientificFloatStr = `${plainFloatStr}[eE]${plainFloatStr}`
export const floatStr = `${plainFloatStr}([eE]${plainFloatStr})?`
export const zeroTo1FloatStr = '(0|0?\\.[0-9]+|1(\\.0+)?)'
export const zeroTo100PercentStr = '([0-9]|[1-9][0-9]|100)\\%'
export const zeroTo100FloatPercentStr =
  '(([0-9]|[1-9][0-9])(\\.[0-9]+)?|100(\\.0+)?)\\%'
export const zeroTo255Str = '([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])'
export const zeroTo255FloatStr =
  '(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-4])(\\.[0-9]+)?|255(\\.0+)?)'
export const zeroTo360Str = '([0-9]|[1-9][0-9]|[1-2][0-9][0-9]|3[0-5][0-9]|360)'
export const zeroTo360FloatStr =
  '(([0-9]|[1-9][0-9]|[1-2][0-9][0-9]|3[0-5][0-9])(\\.[0-9]+)?|360(\\.0+)?)'
