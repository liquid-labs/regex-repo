import { groupTest } from './lib'
import * as regex from './index'
import { goodUsPhones, badUsPhones } from './test-data/usPhones'
import { goodZipCodes, badZipCodes } from './test-data/zipCodes'

groupTest(regex.usPhone, goodUsPhones, badUsPhones)
groupTest(regex.zipCode, goodZipCodes, badZipCodes)
