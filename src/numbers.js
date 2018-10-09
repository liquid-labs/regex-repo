import * as numStrs from './numbers-strings'
import { lockdownRe } from './lib'

export const zeroTo1Float = lockdownRe(numStrs.zeroTo1FloatStr)
export const zeroTo100Percent = lockdownRe(numStrs.zeroTo100PercentStr)
export const zeroTo255 = lockdownRe(numStrs.zeroTo255Str)
export const zeroTo255Float = lockdownRe(numStrs.zeroTo255FloatStr)
