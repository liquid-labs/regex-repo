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

export const plainFloat = lockdownRe(numStrs.plainFloatStr)
export const scientificFloat = lockdownRe(numStrs.scientificFloatStr)
export const float = lockdownRe(numStrs.floatStr)

export const zeroTo1Float = lockdownRe(numStrs.zeroTo1FloatStr)
export const zeroTo100Percent = lockdownRe(numStrs.zeroTo100PercentStr)
export const zeroTo100FloatPercent = lockdownRe(numStrs.zeroTo100FloatPercentStr)
export const zeroTo255 = lockdownRe(numStrs.zeroTo255Str)
export const zeroTo255Float = lockdownRe(numStrs.zeroTo255FloatStr)
export const zeroTo360 = lockdownRe(numStrs.zeroTo360Str)
export const zeroTo360Float = lockdownRe(numStrs.zeroTo360FloatStr)
