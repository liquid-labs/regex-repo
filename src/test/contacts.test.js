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
import * as regex from '../contacts'
import { goodEmails, badEmails } from './data/emails'
import { goodUsPhones, badUsPhones } from './data/usPhones'
import { goodZipCodes, badZipCodes } from './data/zipCodes'

groupTest(regex.usPhoneRe, goodUsPhones, badUsPhones, 'US phones')
groupTestPartial(regex.usPhoneReString, goodUsPhones, badUsPhones, 'US phones')

groupTest(regex.zipCodeRe, goodZipCodes, badZipCodes, 'US zip codes')
groupTestPartial(regex.zipCodeReString, goodZipCodes, badZipCodes, 'US zip codes')

groupTest(regex.emailRe, goodEmails, badEmails, 'emails')
groupTestPartial(regex.emailReString, goodEmails, badEmails, 'emails', undefined, undefined, 'u')
