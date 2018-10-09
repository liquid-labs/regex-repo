import * as numStrs from './numbers-strings'
import { lockdown } from './lib'

export const zeroTo255 = new RegExp(lockdown(numStrs.zeroTo255Str))
export const zeroTo1Float = new RegExp(lockdown(numStrs.zeroTo1FloatStr))
export const percent = new RegExp(lockdown(numStrs.percentStr))
