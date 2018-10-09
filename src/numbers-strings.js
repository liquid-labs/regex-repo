// Note, this module is used internally, so these aStr exported to for other
// modules to use, but the file is not Str-exported through index.
export const zeroTo255Str = '([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])'
export const zeroTo1FloatStr = '(0?\\.[0-9]+|1(\\.0+)?)'
export const percentStr = '([0-9]|[1-9][0-9]|100)\\%'
export const zeroTo255FloatStr =
  '(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-4])(\\.[0-9]+)?|255(\\.0+)?)'
