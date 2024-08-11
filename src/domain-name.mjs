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
/** @module DomainName */
import { lockdownRe } from './lib/lockdown-re'
import { ipTupleReString } from './network'
import { uniNonASCII } from './lib/uni-non-ascii'

export const localhostReString = `(?:localhost|127(?:\\.${ipTupleReString}){3}|::1|0:0:0:0:0:0:0:1)`
/**
 * Matches any representation of localhost; the special name, IPV4 loopbacks, or IPV6 loopbacks.
 */
export const localhostRe = lockdownRe(localhostReString)

// note the 'v' flag breaks on Ubuntu
export const tldNameReString = `(?:[${uniNonASCII}]|[a-zA-Z${uniNonASCII}][a-zA-Z0-9${uniNonASCII}]{1,62})`
/**
 * Matches a Top Level Domain (TLD). See [domain name rules](#domain-name-rules). When using the partial string to 
 * create a Re, you must use the 'u' or 'v' flag.
 */
export const tldNameRe = lockdownRe(tldNameReString, 'u')

export const domainLabelReString = `(?:[a-zA-Z${uniNonASCII}]|[a-zA-Z0-9${uniNonASCII}]{2}|` +
  // otherwise, verify the 3rd and 4th positions are not '-'
  `[a-zA-Z0-9${uniNonASCII}][a-zA-Z0-9${uniNonASCII}\\-](?!--)[a-zA-Z0-9${uniNonASCII}\\-]{0,60}[a-zA-Z0-9${uniNonASCII}])`
/**
 * Matches a non-tld domain label. Enforces the 63 byte domain label limit for non-international (all ASCII) labels. 
 * See [domain name rules](#domain-name-rules). When using the partial string to create a Re, you must use the 'u' or 
 * 'v' flag.
 */
export const domainLabelRe = lockdownRe(domainLabelReString, 'u')

// export const fqDomainNameReString = `(?![0-9\\p{L}.\\-]{256,})(?:${domainLabelReString}\\.)+${tldNameReString}`
export const fqDomainNameReString = `(?!.{256,})(?:${domainLabelReString}\\.)+${tldNameReString}`
/**
 * Matches fully qualified domain name (one or more subdomains + TLD). Partially enforces the 255 byte FQ domain name 
 * limit, but this is only valid for non-international (all ASCII) domain names because we can only count characters. 
 * When using the partial string to create a Re, you must use the 'u' or 'v' flag.
 */
export const fqDomainNameRe = lockdownRe(fqDomainNameReString, 'u')
