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

import * as regex from '../javascript'
import { groupTest, groupTestPartial } from './lib/test-lib'

const validReservedWords = ['for', 'in', 'var', 'yield']
const invalidReservedWords = ['excited', 'javascript', 'ina']

groupTest(regex.jsReservedWordRE, validReservedWords, invalidReservedWords, 'JS reserved words')
groupTestPartial(regex.jsReservedWordREString, validReservedWords, invalidReservedWords, 'JS reserved words')

const validVariableNames = ['blah', 'foo', 'ᾩ', 'ĦĔĽĻŎ', '〱〱〱〱', 'जावास्क्रिप्ट', 'KingGeorgeⅦ']
const invalidVariableNames = ['for', 'in', 'var', 'yield', 'a-bad-name']

groupTest(regex.jsVariableRE, validVariableNames, invalidVariableNames, 'JS variable')
groupTestPartial(regex.jsVariableREString, validVariableNames, invalidVariableNames, 'JS variable', '= ', '  ')
