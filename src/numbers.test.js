import { groupTest } from './lib'
import * as regex from './index'

const stringify = (arr) => arr.map((i) => '' + i)
const stringifyPerc = (arr, plus) => arr.map((i) => i + '%')

const zeroTo100 = [0, 1, 2, 9, 10, 11, 50, 99, 100]
const zeroTo100Float = ['0.0', 0.1, 1.1, 50.1, 99.987654, '100.0']
const notZeroTo100Float = [-1, -99, 100.001, 101, 'a']
const notZeroTo100 = notZeroTo100Float.concat([0.1, '10.0'])
const zeroTo255 = zeroTo100.concat([101, 200, 254, 255])
const zeroTo255Float = zeroTo255.concat(['0.0', 0.1, 1.2, 254.98765, '255.0'])

groupTest(regex.zeroTo1Float,
  stringify([0, 0.0, 0.1, 0.54321, 0.9, 0.99999, 1, 1.0]),
  stringify([-1.1, -1, -0.1, 1.001, 2]),
  'zeroTo1Float')

groupTest(regex.zeroTo100Percent,
  stringifyPerc(zeroTo100),
  stringifyPerc(notZeroTo100),
  'zeroTo100Percent')

groupTest(regex.zeroTo100FloatPercent,
  stringifyPerc(zeroTo100Float),
  stringifyPerc(notZeroTo100Float),
  'zeroTo100FloatPercent')

groupTest(regex.zeroTo255,
  stringify(zeroTo255),
  stringify([-1, 256, 1000, 0.1]),
  'zeroTo255')

groupTest(regex.zeroTo255Float,
  stringify(zeroTo255Float),
  stringify([-1, 256, 1000, 255.1]),
  'zeroTo255Float')
