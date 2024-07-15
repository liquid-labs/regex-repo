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

export const iso8601DateOnlyREString = '([+-]?\\d{4})(?:(-?)(?:(0[1-9]|1[0-2])(?:\\2([12]\\d|0[1-9]|3[01])?)?|W([0-4]\\d|5[0-3])\\2([1-7])?|(00[1-9]|0[1-9]\\d|[12]\\d{2}|3(?:[0-5]\\d|6[1-6])))?)?'
// Date/Times: Matches as [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) consisting of dates only. Provides matching groups 1 (year), 3 (month), and 4 (day of month), 5 (week date), 6 (day of week date), and 7 (ordinal or Julian date). (Group 2 is an internal backreference.)
export const iso8601DateOnlyRE = lockdownRE(iso8601DateOnlyREString)

const eod = '(24(?<endSep>:?)00\\k<endSep>00)'
const frac = '([.,]\\d+)'
const hr = `(?:([01]\\d|2[0-3])${frac}?)`
const min = `(?:([0-5]\\d)${frac}?)`
const sec = `(?:([0-5]\\d|60)${frac}?)`
const tz = `([zZ]|(?:[+-](?!00(?::?00)?)(?:[01]\\d|2[0-3])(?::?[0-5]\\d)?))`

export const iso8601TimeOnlyREString = `(?:${eod}|${hr}(?:(?<timeSep>:?)${min}(?:\\k<timeSep>${sec})?)?)${tz}?`
// Date/Time: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) style time designation. Provides matching 1 (special instant end of day time), 3 (hour), 4 (decimal fraction of hour), 6 (minute), 7 (decimal fraction of minute), 8 (seconds), 9 (decimal fraction of a second), and 10 (timezone designation). (Groups 2 and 5 are internal back references.)
export const iso8601TimeOnlyRE = lockdownRE(iso8601TimeOnlyREString)

export const iso8601DateREString = `${iso8601DateOnlyREString}(?:T${iso8601TimeOnlyREString})?`
// Date/Time: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date time. Provides matching groups 1 (year), 3 (month), and 4 (day of month), 5 (week date), 6 (day of week date), and 7 (ordinal or Julian date), 8 (special instant end of day time), 10 (hour), 12 (decimal fraction of hour), 14 (minute), 15(decimal fraction of minute), 16 (seconds), 17 (decimal fraction of a second), and 18 (timezone designation). (Groups 2, 11, and 13 are internal back references.)
export const iso8601DateRE = lockdownRE(iso8601DateREString)

export const iso8601DateTimeREString = `${iso8601DateOnlyREString}T${iso8601TimeOnlyREString}`
// Date/Time: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) _requiring_ both date and time components.
export const iso8601DateTimeRE = lockdownRE(iso8601DateTimeREString)

export const iso8601LooseDateREString = `${iso8601DateOnlyREString}(?:[T\\s]${iso8601TimeOnlyREString})?`
// Date/Time: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-like date time allowing for a space to separate the date and time components instead of requiring a 'T' as the ISO 8601 spec requires. See [`iso8601DateRE`](#iso8601datere) for capture groups.`
export const iso8601LooseDateRE = lockdownRE(iso8601LooseDateREString)

export const iso8601LooseDateTimeREString = `${iso8601DateOnlyREString}[T\\s]${iso8601TimeOnlyREString}`
// Date/Time: // Date/Time: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-lke date time allowing for a space to separate the date and time instead of requiring a 'T' and _requiring_ both date and time components. See [`iso8601DateRE`](#iso8601datere) for capture groups.
export const iso8601LooseDateTimeRE = lockdownRE(iso8601LooseDateTimeREString)