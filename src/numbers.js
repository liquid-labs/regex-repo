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

import * as numStrs from './numbers-strings'
import { lockdownRe } from './lib'

// Numbers: Matches a plain (non-scientific notation) float.
export const plainFloatRE = lockdownRe(numStrs.plainFloatStr)
// Numbers: Matches a scientific notation float.
export const scientificFloatRE = lockdownRe(numStrs.scientificFloatStr)
// Numbers: Matches a float in either plan or scientific format.
export const floatRE = lockdownRe(numStrs.floatStr)

// CSS numbers: Matches a 0 to 1 float as used in CSS color specifications.
export const zeroTo1FloatRE = lockdownRe(numStrs.zeroTo1FloatStr)
// CSS numbers: Matches a 0 to 100% integer as used in CSS color specifications.
export const zeroTo100PercentRE = lockdownRe(numStrs.zeroTo100PercentStr)
// CSS numbers: Matches a 0 to 100% float as used in CSS color specifications.
export const zeroTo100FloatPercentRE = lockdownRe(numStrs.zeroTo100FloatPercentStr)
// CSS numbers: Matches a 0 to 255 integer as used in CSS color specifications.
export const zeroTo255RE = lockdownRe(numStrs.zeroTo255Str)
// CSS numbers: Matches a 0 to 255 float as used in CSS color specifications.
export const zeroTo255FloatRE = lockdownRe(numStrs.zeroTo255FloatStr)
// CSS numbers: Matches a 0 to 360 integer as used in CSS color specifications.
export const zeroTo360RE = lockdownRe(numStrs.zeroTo360Str)
// CSS numbers: Matches a 0 to 360 float as used in CSS color specifications.
export const zeroTo360FloatRE = lockdownRe(numStrs.zeroTo360FloatStr)
