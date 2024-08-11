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

import { emailREString } from './contacts'
import { lockdownRE } from './lib/lockdown-re'
import { uniNonASCII } from './lib/uni-non-ascii'

// IP address dotted notation octets
// excludes loopback network 0.0.0.0
// excludes reserved space >= 224.0.0.0
// excludes network & broacast addresses
// (first & last IP address of each class)
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

export const ipVFutureREString = '(?:v[0-9a-fA-F]+\\.[a-zA-Z0-9~_.!$&\'()*+,;=:-]+)'
// Web: Matches potential future IP protocols.
export const ipVFutureRE = lockdownRE(ipVFutureREString)

export const localhostREString = `(?:localhost|127(?:\\.${ipTuple}){3}|::1|0:0:0:0:0:0:0:1)`
// Web: Matches any representation of localhost; the special name, IPV4 loopbacks, or IPV6 loopbacks.
export const localhostRE = lockdownRE(localhostREString)

// note the 'v' flag breaks on Ubuntu
export const tldNameREString = `(?:[${uniNonASCII}]|[a-zA-Z${uniNonASCII}][a-zA-Z0-9${uniNonASCII}]{1,62})`
// Web: Matches a Top Level Domain (TLD). See [domain name rules](#domain-name-rules). When using the partial string to create a RE, you must use the 'u' or 'v' flag.
export const tldNameRE = lockdownRE(tldNameREString, 'u')

export const domainLabelREString = `(?:[a-zA-Z${uniNonASCII}]|[a-zA-Z0-9${uniNonASCII}]{2}|` +
  // otherwise, verify the 3rd and 4th positions are not '-'
  `[a-zA-Z0-9${uniNonASCII}][a-zA-Z0-9${uniNonASCII}\\-](?!--)[a-zA-Z0-9${uniNonASCII}\\-]{0,60}[a-zA-Z0-9${uniNonASCII}])`
// Web: Matches a non-tld domain label. Enforces the 63 byte domain label limit for non-international (all ASCII) labels. See [domain name rules](#domain-name-rules). When using the partial string to create a RE, you must use the 'u' or 'v' flag.
export const domainLabelRE = lockdownRE(domainLabelREString, 'u')

// export const fqDomainNameREString = `(?![0-9\\p{L}.\\-]{256,})(?:${domainLabelREString}\\.)+${tldNameREString}`
export const fqDomainNameREString = `(?!.{256,})(?:${domainLabelREString}\\.)+${tldNameREString}`
// Web: Matches fully qualified domain name (one or more subdomains + TLD). Partially enforces the 255 byte FQ domain name limit, but this is only valid for non-international (all ASCII) domain names because we can only count characters. When using the partial string to create a RE, you must use the 'u' or 'v' flag.
export const fqDomainNameRE = lockdownRE(fqDomainNameREString, 'u')

// based on the generic URI RE given in [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986#page-51).
export const urlREString = `(?:([a-z][a-z0-9+.-]*):\\/{0,2}([^/?#]*)\\/([^?#]*)(?:\\?([^#]*))?(?:#(.*))?)`
// Web: Matches a valid, generic URL. Provides capture groups 1 (schema), 2 (server/authority), 3 (path), 4 (query part), 5 (intra-page link/fragment.) Note, a URL always has scheme, and at a minimum a server/authority or path, and may have both. The query and fragment components are always optional. For general usage, you might want to use the more specific REs for specific protocols or the `commonURLRE`.
export const urlRE = lockdownRE(urlREString, 'u')

export const mailtoURLREString = `(?:mailto:(${emailREString}))`
// Web: Matches a valid 'mailto:' URL. Provides a single capture group, 1 (email address).' You must use the either the 'u' or 'v' flag when using the RE string.
export const mailtoURLRE = lockdownRE(mailtoURLREString, 'u')

const userPlusPassREString = '(?:(\\S+)(?::(\\S*))?@)'
const hostOrIPREString = `(${ipHostREString}|${fqDomainNameREString}|\\[(?:${ipV6REString}|${ipVFutureREString})\\]|localhost)`
const portREString = '(?::(\\d{2,5}))'
// though URLs in general allow spaces in the path component, they are disallowed in the HTTP(S) protocols
const urlPathREString = '(\\/[^ ?#]*)'
// though URLs in general allow spaces in the query and fragment components, we disallow them in the HTTP(S) protocol
const urlQueryAndFragementREString = '(?:\\?([^ #]*))?(?:#([^ ]*))?' // already has the '?' qualifiers

export const httpURLREString =
`(https?):\\/\\/${userPlusPassREString}?${hostOrIPREString}${portREString}?${urlPathREString}?${urlQueryAndFragementREString}`
// Web: Matches a valid 'http/https' URL. Provides capture groups 1 (protocol), 2 (username), 3 (user password), 4 (host or IP), 5 (port), 6 (path), 7 (query string), and 8 (fragment). You must use the either the 'u' or 'v' flag when using the RE string.
export const httpURLRE = lockdownRE(httpURLREString, 'u')

// Web: Matches a valid 'ftp' URL. Provides capture groups 1 (username), 2 (user password), 3 (host or IP), 4 (port), 5 (path). You must use the either the 'u' or 'v' flag when using the RE string.
export const ftpURLREString = `(?:ftp:\\/\\/${userPlusPassREString}?${hostOrIPREString}${portREString}?${urlPathREString}?)`
export const ftpURLRE = lockdownRE(ftpURLREString, 'u')

export const fileURLREString = `(?:file:\\/\\/${hostOrIPREString}?${urlPathREString})`
// Web: Matches a valid 'file' URL. Provides capture groups 1 (host), 2 (port), 3 (path). You must use the either the 'u' or 'v' flag when using the RE string.
export const fileURLRE = lockdownRE(fileURLREString, 'u')

export const commonURLREString = `(?:${mailtoURLREString}|${httpURLREString}|${ftpURLREString}|${fileURLREString})`
// Web: Matches any of the "common" web URL types: 'mailto', 'http/https', 'ftp', and 'file'. You must use the either the 'u' or 'v' flag when using the RE string.
export const commonURLRE = lockdownRE(commonURLREString, 'u')
