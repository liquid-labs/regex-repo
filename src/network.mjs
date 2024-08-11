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
/** @module Network */
import { lockdownRe } from './lib/lockdown-re'

// IP address dotted notation octets
// excludes loopback network 0.0.0.0
// excludes reserved space >= 224.0.0.0
// excludes network & broacast addresses
// (first & last IP address of each class)
export const ipHostReString = '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
  '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
  '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))'
/**
 * Matches a valid, non-localhost IP address.
 */
export const ipHostRe = lockdownRe(ipHostReString)

export const ipTupleReString = '(?:0|1?\\d{1,2}|2[0-4]\\d|25[0-5])'
export const ipAddressReString = `(?:${ipTupleReString}\\.){3}${ipTupleReString}`
/**
 * Matches a string in IP address format. Use 'ipHostRe' to match actually valid IP addresses.
 */
export const ipAddressRe = lockdownRe(ipAddressReString)

// credit to: https://stackoverflow.com/a/17871737/929494
export const ipV6ReString =
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
/**
 * Matches a string in IPV6 format.
 */
export const ipV6Re = lockdownRe(ipV6ReString)

export const ipVFutureReString = '(?:v[0-9a-fA-F]+\\.[a-zA-Z0-9~_.!$&\'()*+,;=:-]+)'
/**
 * Matches potential future IP protocols.
 */
export const ipVFutureRe = lockdownRe(ipVFutureReString)
