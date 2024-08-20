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

import { groupTest, groupTestPartial } from './lib/test-lib'
import * as regex from '../numbers'

const stringify = (arr) => arr.map((i) => '' + i)
const stringifyPerc = (arr) => arr.map((i) => i + '%')

const integers = [1, 0, -100]
const notIntegers = ['1.0', '00', '01']

groupTest(regex.integerRe, stringify(integers), notIntegers, 'integers')
groupTestPartial(regex.integerReString, stringify(integers), notIntegers, 'integers')

const plainFloats = [-100, -100.1, '-99.0', 0, '0.0', '-0', '+0', '0.1', '678.938']
const notPlainFloats = ['1e20', 'a', '1b']
const scientificFloats = ['-1e-40', '-1.1E-41.0', '38.8e0.83', '38.0e+0.38']
const notScientificFloats = stringify([1.0, '1e20e20', '1b'])
const floats = plainFloats.concat(scientificFloats)
const notFloats = ['1e20e20', '1b', '--20']
const zeroTo1Floats = stringify([0, 0.0, 0.1, 0.54321, 0.9, 0.99999, 1, 1.0])
const notZeroTo1Floats = stringify([-1.1, -1, -0.1, 1.001, 2])
const zeroTo100 = [0, 1, 2, 9, 10, 11, 50, 99, 100]
const zeroTo100Float = ['0.0', 0.1, 1.1, 50.1, 99.987654, '100.0']
const notZeroTo100Float = [-1, -99, 100.001, 101, 'a']
const notZeroTo100 = notZeroTo100Float.concat([0.1, '10.0'])
const zeroTo255 = zeroTo100.concat([101, 200, 254, 255])
const notZeroTo255 = stringify([-1, 256, 1000, 0.1])
const zeroTo255Float = zeroTo255.concat(['0.0', 0.1, 1.2, 254.98765, '255.0'])
const notZeroTo255Float = stringify([-1, 256, 1000, 255.1])
const zeroTo360 = zeroTo255.concat(300, 359, 360)
const notZeroTo360 = stringify([-1, 361, 1000, 0.1])
const zeroTo360Float = zeroTo360.concat('0.0', 0.1, '359.0', 359.1, 360.0)
const notZeroTo360Float = stringify([-1, 361, 1000, 360.1])

groupTest(regex.plainFloatRe, stringify(plainFloats), notPlainFloats, 'plainFloat')
groupTestPartial(regex.plainFloatReString, stringify(plainFloats), notPlainFloats, 'plainFloat')

groupTest(regex.scientificFloatRe, scientificFloats, notScientificFloats, 'scientificFloat')
groupTestPartial(regex.scientificFloatReString, scientificFloats, notScientificFloats, 'scientificFloat')

groupTest(regex.floatRe, floats, notFloats, 'float')
groupTestPartial(regex.floatReString, floats, notFloats, 'float')

groupTest(regex.zeroTo1FloatRe, zeroTo1Floats, notZeroTo1Floats, 'zeroTo1Float')
groupTestPartial(regex.zeroTo1FloatReString, zeroTo1Floats, notZeroTo1Floats, 'zeroTo1Float')

groupTest(regex.zeroTo100PercentRe, stringifyPerc(zeroTo100), stringifyPerc(notZeroTo100), 'zeroTo100Percent')
groupTestPartial(
  regex.zeroTo100PercentReString,
  stringifyPerc(zeroTo100),
  stringifyPerc(notZeroTo100),
  'zeroTo100Percent',
)

groupTest(regex.zeroTo100FloatPercentRe,
  stringifyPerc(zeroTo100Float),
  stringifyPerc(notZeroTo100Float),
  'zeroTo100FloatPercent')
groupTestPartial(regex.zeroTo100FloatPercentReString,
  stringifyPerc(zeroTo100Float),
  stringifyPerc(notZeroTo100Float),
  'zeroTo100FloatPercent')

groupTest(regex.zeroTo255Re, stringify(zeroTo255), notZeroTo255, 'zeroTo255')
groupTestPartial(regex.zeroTo255ReString, stringify(zeroTo255), notZeroTo255, 'zeroTo255')

groupTest(regex.zeroTo255FloatRe, stringify(zeroTo255Float), notZeroTo255Float, 'zeroTo255Float')
groupTestPartial(regex.zeroTo255FloatReString, stringify(zeroTo255Float), notZeroTo255Float, 'zeroTo255Float')

groupTest(regex.zeroTo360Re, stringify(zeroTo360), notZeroTo360, 'zeroTo360')
groupTestPartial(regex.zeroTo360ReString, stringify(zeroTo360), notZeroTo360, 'zeroTo360')

groupTest(regex.zeroTo360FloatRe, stringify(zeroTo360Float), notZeroTo360Float, 'zeroTo360Float')
groupTestPartial(regex.zeroTo360FloatReString, stringify(zeroTo360Float), notZeroTo360Float, 'zeroTo360Float')
