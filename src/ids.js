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

import { lockdownRE } from './lib/lockdown-re'

export const uuidREString = '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}'
// Identifiers: Matches a UUID.
export const uuidRE = lockdownRE(uuidREString)

export const ssnREString = '(?!000|666|9\\d\\d)(\\d{3})-?(\\d\\d)-?(?!0000)(\\d{4})'
// Identifiers: Matches a valid SSN. Provides 3 matching groups, 1 (area number), 2 (group number), and 3 (serial number).
export const ssnRE = lockdownRE(ssnREString)

// https://www.irs.gov/businesses/small-businesses-self-employed/how-eins-are-assigned-and-valid-ein-prefixes
const validEINPrefix = [10, 12, 60, 67, 50, 53, 1, 2, 3, 4, 5, 6, 11, 13, 14, 16, 21, 22, 23, 25, 34, 51, 52, 54, 55, 56, 57, 58, 59, 65, 30, 32, 35, 36, 37, 38, 61, 15, 24, 40, 44, 94, 95, 80, 90, 33, 39, 41, 42, 43, 48, 62, 63, 64, 66, 68, 71, 72, 73, 74, 75, 76, 77, 82, 83, 84, 85, 86, 87, 88, 91, 92, 93, 98, 99, 20, 26, 27, 45, 46, 47, 81, 31].map((prefix) => ('' + prefix).padStart(2, '0'))

export const einREString = '(?:' + validEINPrefix.join('|') + ')-?\\d{7}'
// Identifiers: Matches a valid EIN number.
export const einRE = lockdownRE(einREString)