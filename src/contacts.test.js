import { groupTest } from './testlib'
import * as regex from './index'
import { goodUsPhones, badUsPhones } from './test-data/usPhones'

groupTest(goodUsPhones, regex.usPhone, true)
groupTest(badUsPhones, regex.usPhone, false)
