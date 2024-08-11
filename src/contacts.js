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
/** @module Contacts */
import { fqDomainNameReString } from './domain-name'
import { lockdownRe } from './lib/lockdown-re'
import { uniNonASCII } from './lib/uni-non-ascii'

export const usPhoneReString = '(\\+?1[._ -]?)?(\\(\\d{3}\\)|\\d{3})[._ -]?\\d{3}[._ -]?\\d{4}'
/**
 * Matches US phone numbers with optional country code and area code.
 */
export const usPhoneRe = lockdownRe(usPhoneReString)

export const zipCodeReString = '\\d{5}([._ -]?\\d{4})?'
/**
 * Matches 5 or 9 digit US zip codes.
 */
export const zipCodeRe = lockdownRe(zipCodeReString)

export const emailReString = `([a-zA-Z0-9${uniNonASCII}!#$%&'*+\\/=?^_\`\\{\\|\\}~\\-]+(?:\\.[a-zA-Z0-9${uniNonASCII}!#$%&'*+\\/=?^_\`\\{\\|\\}~\\-]+)*|"(?:[\\x20-\\x21\\x23-\\x5b\\x5d-\\x7e${uniNonASCII}]|\\\\[\\x20-\\x7e${uniNonASCII}])*")@(${fqDomainNameReString})`
/**
 * Match most valid emails. Provides matching groups 1 (user name) and 2 (domain). When using the partial string to 
 * create a Re, you must use the 'u' flag.
 */
export const emailRe = lockdownRe(emailReString, 'u')
