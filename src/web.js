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


const uniNonASCII = '\\u00a1-\\u{e007f}'

/* Base RE cribbed from: https://github.com/chriso/validator.js via https://stackoverflow.com/a/22648406/929494
   Annotations cribbed from https://gist.github.com/dperini/729294 */
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
  `|(?:(?:[a-z${uniNonASCII}0-9]+-?)*[a-z${uniNonASCII}0-9]+)(?:\\.(?:[a-z${uniNonASCII}0-9]+-?)*[a-z${uniNonASCII}0-9]+)*(?:\\.(?:[a-z${uniNonASCII}]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?`
// Web: Matches a valid URL. When using the partial string to create a RE, you must use the 'u' or 'v' flag.
export const urlRE = lockdownRE(urlREString, 'ui')

// note the 'v' flag breaks on Ubuntu
export const tldNameREString = `(?:(?![0-9])(?:[${uniNonASCII}]|[a-zA-Z${uniNonASCII}][a-zA-Z0-9${uniNonASCII}]{1,62}))`
// Web: Matches a Top Level Domain (TLD). See [domain name rules](#domain-name-rules). When using the partial string to create a RE, you must use the 'u' or 'v' flag.
export const tldNameRE = lockdownRE(tldNameREString, 'u')

export const subdomainLabelREString = `(?:[${uniNonASCII}]|[a-zA-Z0-9${uniNonASCII}]` + // allow single unicode
  `(?:[a-zA-Z0-9${uniNonASCII}]|` + // two letters only
  // otherwise, verify the 3rd and 4th positions are not '-'
  `[a-zA-Z0-9${uniNonASCII}\\-](?!--)[a-zA-Z0-9${uniNonASCII}\\-]{0,60}[\\p{L}0-9]))`
// Web: Matches a registerable domain name. Partially enforces the 63 byte domain label limit, but this is only valid for non-international (all ASCII) labels because we can only count characters. See [domain name rules](#domain-name-rules). When using the partial string to create a RE, you must use the 'u' or 'v' flag.
export const subdomainLabelRE = lockdownRE(subdomainLabelREString, 'u')

// export const fqDomainNameREString = `(?![0-9\\p{L}.\\-]{256,})(?:${subdomainLabelREString}\\.)+${tldNameREString}`
export const fqDomainNameREString = `(?!.{256,})(?:${subdomainLabelREString}\\.)+${tldNameREString}`
// Web: Matches fully qualified domain name (one or more subdomains + TLD). Partially enforces the 255 byte FQ domain name limit, but this is only valid for non-international (all ASCII) domain names because we can only count characters. When using the partial string to create a RE, you must use the 'u' or 'v' flag.
export const fqDomainNameRE = lockdownRE(fqDomainNameREString, 'u')

export const emailREString = `([a-zA-Z0-9${uniNonASCII}!#$%&'*+\\/=?^_\`\\{\\|\\}~\\-]+(?:\\.[a-zA-Z0-9${uniNonASCII}!#$%&'*+\\/=?^_\`\\{\\|\\}~\\-]+)*|"(?:[\\x20-\\x21\\x23-\\x5b\\x5d-\\x7e${uniNonASCII}]|\\\\[\\x20-\\x7e${uniNonASCII}])*")@(${fqDomainNameREString})`
// Contact info: Match most valid emails. Provides matching groups 1 (user name) and 2 (domain). When using the partial string to create a RE, you must use the 'u' flag.
export const emailRE = lockdownRE(emailREString, 'u')
