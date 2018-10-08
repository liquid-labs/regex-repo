import { groupTest } from './testlib'
import * as regex from './index'
import { goodUsPhones, badUsPhones } from './test-data/usPhones'
import { goodZipCodes, badZipCodes } from './test-data/zipCodes'

groupTest(goodUsPhones, regex.usPhone, true)
groupTest(badUsPhones, regex.usPhone, false)

groupTest(goodZipCodes, regex.zipCode, true)
groupTest(badZipCodes, regex.zipCode, false)
