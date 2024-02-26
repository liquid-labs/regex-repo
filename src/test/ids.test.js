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
import * as regex from '../ids'

const validUUID = ['00000000-0000-1000-8000-000000000000']
const invalidUUID = ['00000000-0000-0000-0000-000000000000']

groupTest(regex.uuidRE, validUUID, invalidUUID, 'uuidRE')
groupTestPartial(regex.uuidREString, validUUID, invalidUUID, 'uuidRE')
