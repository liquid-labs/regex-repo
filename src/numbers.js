import * as numStrs from './numbers-strings'
import { lockdownRe } from './lib'

export const zeroTo255 = lockdownRe(numStrs.zeroTo255Str)
export const zeroTo1Float = lockdownRe(numStrs.zeroTo1FloatStr)
export const percent = lockdownRe(numStrs.percentStr)
