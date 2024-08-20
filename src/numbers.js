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
import { lockdownRe } from './lib/lockdown-re'

export const integerReString = '-?(?:0|[1-9]\\d*)'

/**
 * Matches an integer.
 * @category Numbers
 */
export const integerRe = lockdownRe(integerReString)

export const plainFloatReString = numStrs.plainFloatStr

/**
 * Matches a plain (non-scientific notation) float.
 * @category Numbers
 */
export const plainFloatRe = lockdownRe(plainFloatReString)

export const scientificFloatReString = numStrs.scientificFloatStr

/**
 * Matches a scientific notation float.
 * @category Numbers
 */
export const scientificFloatRe = lockdownRe(scientificFloatReString)

export const floatReString = numStrs.floatStr

/**
 * Matches a float in either plan or scientific format.
 * @category Numbers
 */
export const floatRe = lockdownRe(floatReString)

export const zeroTo1FloatReString = numStrs.zeroTo1FloatStr

/**
 * Matches a 0 to 1 float as used in CSS color specifications.
 * @category CSS numbers
 */
export const zeroTo1FloatRe = lockdownRe(zeroTo1FloatReString)

export const zeroTo100PercentReString = numStrs.zeroTo100PercentStr

/**
 * Matches a 0 to 100% integer as used in CSS color specifications.
 * @category CSS numbers
 */
export const zeroTo100PercentRe = lockdownRe(zeroTo100PercentReString)

export const zeroTo100FloatPercentReString = numStrs.zeroTo100FloatPercentStr

/**
 * Matches a 0 to 100% float as used in CSS color specifications.
 * @category CSS numbers
 */
export const zeroTo100FloatPercentRe = lockdownRe(zeroTo100FloatPercentReString)

export const zeroTo255ReString = numStrs.zeroTo255Str

/**
 * Matches a 0 to 255 integer as used in CSS color specifications.
 * @category CSS numbers
 */
export const zeroTo255Re = lockdownRe(zeroTo255ReString)

export const zeroTo255FloatReString = numStrs.zeroTo255FloatStr

/**
 * Matches a 0 to 255 float as used in CSS color specifications.
 * @category CSS numbers
 */
export const zeroTo255FloatRe = lockdownRe(zeroTo255FloatReString)

export const zeroTo360ReString = numStrs.zeroTo360Str

/**
 * Matches a 0 to 360 integer as used in CSS color specifications.
 * @category CSS numbers
 */
export const zeroTo360Re = lockdownRe(zeroTo360ReString)

export const zeroTo360FloatReString = numStrs.zeroTo360FloatStr

/**
 * Matches a 0 to 360 float as used in CSS color specifications.
 * @category CSS numbers
 */
export const zeroTo360FloatRe = lockdownRe(zeroTo360FloatReString)
