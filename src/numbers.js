/*
Copyright 2023 Liquid Labs LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import * as numStrs from './lib/numbers-strings'
import { lockdownRE } from './lib/lockdown-re'

export const plainFloatREString = numStrs.plainFloatStr
// Numbers: Matches a plain (non-scientific notation) float.
export const plainFloatRE = lockdownRE(plainFloatREString)

export const scientificFloatREString = numStrs.scientificFloatStr
// Numbers: Matches a scientific notation float.
export const scientificFloatRE = lockdownRE(scientificFloatREString)

export const floatREString = numStrs.floatStr
// Numbers: Matches a float in either plan or scientific format.
export const floatRE = lockdownRE(floatREString)

export const zeroTo1FloatREString = numStrs.zeroTo1FloatStr
// CSS numbers: Matches a 0 to 1 float as used in CSS color specifications.
export const zeroTo1FloatRE = lockdownRE(zeroTo1FloatREString)

export const zeroTo100PercentREString = numStrs.zeroTo100PercentStr
// CSS numbers: Matches a 0 to 100% integer as used in CSS color specifications.
export const zeroTo100PercentRE = lockdownRE(zeroTo100PercentREString)

export const zeroTo100FloatPercentREString = numStrs.zeroTo100FloatPercentStr
// CSS numbers: Matches a 0 to 100% float as used in CSS color specifications.
export const zeroTo100FloatPercentRE = lockdownRE(zeroTo100FloatPercentREString)

export const zeroTo255REString = numStrs.zeroTo255Str
// CSS numbers: Matches a 0 to 255 integer as used in CSS color specifications.
export const zeroTo255RE = lockdownRE(zeroTo255REString)

export const zeroTo255FloatREString = numStrs.zeroTo255FloatStr
// CSS numbers: Matches a 0 to 255 float as used in CSS color specifications.
export const zeroTo255FloatRE = lockdownRE(zeroTo255FloatREString)

export const zeroTo360REString = numStrs.zeroTo360Str
// CSS numbers: Matches a 0 to 360 integer as used in CSS color specifications.
export const zeroTo360RE = lockdownRE(zeroTo360REString)

export const zeroTo360FloatREString = numStrs.zeroTo360FloatStr
// CSS numbers: Matches a 0 to 360 float as used in CSS color specifications.
export const zeroTo360FloatRE = lockdownRE(zeroTo360FloatREString)
