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

/* globals test, expect */
import * as regex from './index'

const trivial0 = '00000000-0000-1000-8000-000000000000'
const invalidUuid = '00000000-0000-0000-0000-000000000000'

test('trivial (all 0) UUID is valid', () => {
  expect(regex.uuid.test(trivial0)).toBe(true)
})

test('recognize invalid UUID', () => {
  expect(regex.uuid.test(invalidUuid)).toBe(false)
})
