export const validRgb1 = [
  'rgb(1, 2, 3)',
  'rgb(234, 29, 120)',
  'rgb( 234 ,  29 ,120 )',
  'rgba(1, 2, 3, 4)',
  'rgba(234, 29, 120, 89)',
  'rgba( 234 ,  29 ,120,89 )',
]

export const validRgb = validRgb1.concat([
  'rgb(1, 2, 3, 4)',
  'rgba(1, 2, 3)'
])

// Note, we swap the order here; validRgb is additive, invalidRgb1 is subtractive
export const invalidRgb = [
  'rgb(-234, 29, 120)',
  'rgb(300, 20, 20)',
  'rgb(260, 20, 20)',
  'rgb(256, 20, 20)',
  'rgb(20, 256, 20)',
  'rgba(1, 2, 3, 4, 5)',
  'rgba(234, 29, 120, -89)',
  'rgba(234, 029, 120, 89)',
  'rgba(20, 20, 20, 256)',
]

export const invalidRgb1 = invalidRgb.concat([
  'rgb(1, 2, 3, 4)',
  'rgb(234, 29, 120, 29)',
  'rgba(1, 2, 3)',
])
