import { groupTest } from './testlib'
import * as regex from './index'
import { validHexColors3, validHexColors, invalidHexColors } from './test-data/hexColors'

groupTest(regex.hexColor3, validHexColors3, invalidHexColors)
groupTest(regex.hexColor, validHexColors, invalidHexColors)
