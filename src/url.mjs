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
import { ipHostREString, ipV6REString, ipVFutureREString } from './network'
import { fqDomainNameREString } from './domain-name'
import { lockdownRE } from './lib/lockdown-re'

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
