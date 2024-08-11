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
/** @module url */
import { emailReString } from './contacts'
import { ipHostReString, ipV6ReString, ipVFutureReString } from './network'
import { fqDomainNameReString } from './domain-name'
import { lockdownRe } from './lib/lockdown-re'

// based on the generic URI Re given in [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986#page-51).
export const urlReString = '(?:([a-z][a-z0-9+.-]*):\\/{0,2}([^/?#]*)(\\/[^?#]*)?(?:\\?([^#]*))?(?:#(.*))?)'
/**
 * Matches a valid, generic URL. Provides capture groups 1 (schema), 2 (server/authority), 3 (path), 4 (query part), 5 (
 * intra-page link/fragment.) Note, a URL always has scheme, and at a minimum a server/authority or path, and may have 
 * both. The query and fragment components are always optional. For general usage, you might want to use the more 
 * specific Res for specific protocols or the `commonUrlRe`.
 */
export const urlRe = lockdownRe(urlReString, 'u')

export const mailtoUrlReString = `(?:mailto:(${emailReString}))`
/**
 * Matches a valid 'mailto:' URL. Provides a single capture group, 1 (email address).' You must use the either the 'u' 
 * or 'v' flag when using the Re string.
 */
export const mailtoUrlRe = lockdownRe(mailtoUrlReString, 'u')

const userPlusPassReString = '(?:(\\S+)(?::(\\S*))?@)'
const hostOrIPReString = `(${ipHostReString}|${fqDomainNameReString}|\\[(?:${ipV6ReString}|${ipVFutureReString})\\]|localhost)`
const portReString = '(?::(\\d{2,5}))'
// though URLs in general allow spaces in the path component, they are disallowed in the HTTP(S) protocols
const urlPathReString = '(\\/[^ ?#]*)'
// though URLs in general allow spaces in the query and fragment components, we disallow them in the HTTP(S) protocol
const urlQueryAndFragementReString = '(?:\\?([^ #]*))?(?:#([^ ]*))?' // already has the '?' qualifiers

export const httpUrlReString =
`(https?):\\/\\/${userPlusPassReString}?${hostOrIPReString}${portReString}?${urlPathReString}?${urlQueryAndFragementReString}`
/**
 * Matches a valid 'http/https' URL. Provides capture groups 1 (protocol), 2 (username), 3 (user password), 4 (host or 
 * IP), 5 (port), 6 (path), 7 (query string), and 8 (fragment). You must use the either the 'u' or 'v' flag when using 
 * the Re string.
 */
export const httpUrlRe = lockdownRe(httpUrlReString, 'u')

export const ftpUrlReString = `(?:ftp:\\/\\/${userPlusPassReString}?${hostOrIPReString}${portReString}?${urlPathReString}?)`
/**
 * Matches a valid 'ftp' URL. Provides capture groups 1 (username), 2 (user password), 3 (host or IP), 4 (port), 5 
 * (path). You must use the either the 'u' or 'v' flag when using the Re string.
 */
export const ftpUrlRe = lockdownRe(ftpUrlReString, 'u')

export const fileUrlReString = `(?:file:\\/\\/${hostOrIPReString}?${urlPathReString})`
/**
 * Matches a valid 'file' URL. Provides capture groups 1 (host), 2 (port), 3 (path). You must use the either the 'u' or 
 * 'v' flag when using the Re string.
 */
export const fileUrlRe = lockdownRe(fileUrlReString, 'u')

export const commonUrlReString = `(?:${mailtoUrlReString}|${httpUrlReString}|${ftpUrlReString}|${fileUrlReString})`
/**
 * Matches any of the "common" web URL types: 'mailto', 'http/https', 'ftp', and 'file'. You must use the either the 
 * 'u' or 'v' flag when using the Re string.
 */
export const commonUrlRe = lockdownRe(commonUrlReString, 'u')
