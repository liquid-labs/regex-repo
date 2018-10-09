import { groupTest } from './lib'
import * as regex from './index'

const stringify = (arr) => arr.map((i) => '' + i)
console.log(regex.zeroTo255)
groupTest(regex.zeroTo255,
  stringify([0, 1, 2, 9, 10, 11, 50, 99, 100, 101, 200, 254, 255]),
  stringify([-1, 256, 1000, 0.1]),
  'zeroTo255')
