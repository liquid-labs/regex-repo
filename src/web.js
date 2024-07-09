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

export const ipREString = '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
  '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
  '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))'
// Web: Matches a valid, non-localhost IP address.
export const ipRE = lockdownRE(ipREString)

const ipTuple = '(?:0|1?\\d{1,2}|2[0-4]\\d|25[0-5])'
export const ipFormatREString = `(?:${ipTuple}\\.){3}${ipTuple}`
// Web: Matches a string in IP address format. Use 'ipRE' to match actually valid IP addresses.
export const ipFormatRE = lockdownRE(ipFormatREString)

// Base RE cribbed from: https://github.com/chriso/validator.js via https://stackoverflow.com/a/22648406/929494
// Annotations cribbed from https://gist.github.com/dperini/729294
export const urlREString =
  // protocol ID
  '(?!mailto:)(?:(?:http|https|ftp)://)' +
  // user + pass
  '(?:\\S+(?::\\S*)?@)?' +
  // IP address dotted notation octets
  // excludes loopback network 0.0.0.0
  // excludes reserved space >= 224.0.0.0
  // excludes network & broacast addresses
  // (first & last IP address of each class)
  '(?:(?:' + ipREString +
  '|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?'
// Web: Matches a valid URL.
export const urlRE = lockdownRE(urlREString, 'i')

export const tldNameREString = '[a-zA-Z]{2,63}'
// Web: Matches a Top Level Domain (TLD). See [domain name rules](#domain-name-rules).
export const tldNameRE = lockdownRE(tldNameREString)

export const domainNameREString = '[a-zA-Z0-9](?:[a-zA-Z0-9]|[a-zA-Z0-9-][a-zA-Z0-9]|[a-zA-Z0-9-][a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]|[a-zA-Z0-9-][a-zA-Z0-9-][a-zA-Z0-9]|[a-zA-Z0-9-][a-zA-Z0-9-][a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])'
// Web: Matches a registerable domain name. See [domain name rules](#domain-name-rules).
export const domainNameRE = lockdownRE(domainNameREString)

export const subDomainREString = '[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]'
// Web: Matches a valid sub-domain label. See [domain name rules](#domain-name-rules).
export const subDomainRE = lockdownRE(subDomainREString)

export const fqDomainNameREString = `(?:${subDomainREString}\\.)*(?:${domainNameREString}\\.)+${tldNameREString}`
// Web: Matches fully qualified domain name (zero or more sub-domains + registerable domain + TLD). Does not enforce 63 character domain label limit or 255 character FQN domain limit.
export const fqDomainNameRE = lockdownRE(fqDomainNameREString)

// based on https://stackoverflow.com/a/201378/929494; modified to allow uppercase characters and restrict to valid DNS
// names in the domain portion
export const emailREString = `([a-zA-Z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(${fqDomainNameREString})`
// Contact info: Match a valid email. Provides matching groups 1 (user name) and 2 (domain).
export const emailRE = lockdownRE(emailREString)
