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
import { uniNonASCII } from './lib/uni-non-ascii'

export const ipHostREString = '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
  '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
  '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))'
// Web: Matches a valid, non-localhost IP address.
export const ipHostRE = lockdownRE(ipHostREString)

const ipTuple = '(?:0|1?\\d{1,2}|2[0-4]\\d|25[0-5])'
export const ipAddressREString = `(?:${ipTuple}\\.){3}${ipTuple}`
// Web: Matches a string in IP address format. Use 'ipHostRE' to match actually valid IP addresses.
export const ipAddressRE = lockdownRE(ipAddressREString)

// credit to: https://stackoverflow.com/a/17871737/929494
export const ipV6REString =
  '(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|' + // 1:2:3:4:5:6:7:8
  '([0-9a-fA-F]{1,4}:){1,7}:|' + // 1::                              1:2:3:4:5:6:7::
  '([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|' + // 1::8             1:2:3:4:5:6::8  1:2:3:4:5:6::8
  '([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|' + // 1::7:8           1:2:3:4:5::7:8  1:2:3:4:5::8
  '([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|' + // 1::6:7:8         1:2:3:4::6:7:8  1:2:3:4::8
  '([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|' + // 1::5:6:7:8       1:2:3::5:6:7:8  1:2:3::8
  '([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|' + // 1::4:5:6:7:8     1:2::4:5:6:7:8  1:2::8
  '[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|' + // 1::3:4:5:6:7:8   1::3:4:5:6:7:8  1::8
  ':((:[0-9a-fA-F]{1,4}){1,7}|:)|' + // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8 ::8       ::
  // (link-local IPv6 addresses with zone index)
  'fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|' + // fe80::7:8%eth0   fe80::7:8%1
  '::(ffff(:0{1,4}){0,1}:){0,1}' +
  '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}' +
  // (IPv4-mapped IPv6 addresses and IPv4-translated addresses)
  '(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|' + // ::255.255.255.255   ::ffff:255.255.255.255  ::ffff:0:255.255.255.255
  '([0-9a-fA-F]{1,4}:){1,4}:' +
  '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}' +
  // 2001:db8:3:4::192.0.2.33  64:ff9b::192.0.2.33 (IPv4-Embedded IPv6 Address)
  '(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))'
// Web: Matches a string in IPV6 format.
export const ipV6RE = lockdownRE(ipV6REString)

export const localhostREString = `(?:localhost|127(?:\\.${ipTuple}){3}|::1|0:0:0:0:0:0:0:1)`
// Web: Matches any representation of localhost; the special name, IPV4 loopbacks, or IPV6 loopbacks.
export const localhostRE = lockdownRE(localhostREString)

// note the 'v' flag breaks on Ubuntu
export const tldNameREString = `(?:[${uniNonASCII}]|[a-zA-Z${uniNonASCII}][a-zA-Z0-9${uniNonASCII}]{1,62})`
// Web: Matches a Top Level Domain (TLD). See [domain name rules](#domain-name-rules). When using the partial string to create a RE, you must use the 'u' or 'v' flag.
export const tldNameRE = lockdownRE(tldNameREString, 'u')

export const subdomainLabelREString = `(?:[a-zA-Z${uniNonASCII}]|[a-zA-Z0-9${uniNonASCII}]{2}|` +
  // otherwise, verify the 3rd and 4th positions are not '-'
  `[a-zA-Z0-9${uniNonASCII}][a-zA-Z0-9${uniNonASCII}\\-](?!--)[a-zA-Z0-9${uniNonASCII}\\-]{0,60}[a-zA-Z0-9${uniNonASCII}])`
// Web: Matches a registerable domain name. Partially enforces the 63 byte domain label limit, but this is only valid for non-international (all ASCII) labels because we can only count characters. See [domain name rules](#domain-name-rules). When using the partial string to create a RE, you must use the 'u' or 'v' flag.
export const subdomainLabelRE = lockdownRE(subdomainLabelREString, 'u')

// export const fqDomainNameREString = `(?![0-9\\p{L}.\\-]{256,})(?:${subdomainLabelREString}\\.)+${tldNameREString}`
export const fqDomainNameREString = `(?!.{256,})(?:${subdomainLabelREString}\\.)+${tldNameREString}`
// Web: Matches fully qualified domain name (one or more subdomains + TLD). Partially enforces the 255 byte FQ domain name limit, but this is only valid for non-international (all ASCII) domain names because we can only count characters. When using the partial string to create a RE, you must use the 'u' or 'v' flag.
export const fqDomainNameRE = lockdownRE(fqDomainNameREString, 'u')

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
  '(?:(?:' + ipHostREString +
  `|${fqDomainNameREString}|localhost))(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?`
// Web: Matches a valid URL. When using the partial string to create a RE, you must use the 'u' or 'v' flag.
export const urlRE = lockdownRE(urlREString, 'u')
