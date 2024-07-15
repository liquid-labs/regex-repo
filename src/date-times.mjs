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

// Started RE based on https://www.myintervals.com/blog/2009/05/20/iso-8601-date-validation-that-doesnt-suck/
// Made some corrections, rearranged capture groups.

export const iso8601DayOnlyREString = '([+-]?\\d{4})(?:(-?)(?:(0[1-9]|1[0-2])(?:\\2([12]\\d|0[1-9]|3[01])?)?|W([0-4]\\d|5[0-3])\\2([1-7])?|(00[1-9]|0[1-9]\\d|[12]\\d{2}|3(?:[0-5]\\d|6[1-6])))?)?'
// Date/Times: Matches as [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) consisting of dates only, like '2024-01-01'. Provides matching groups 1 (year), 3 (month), and 4 (day of month), 5 (week date), 6 (day of week date), and 7 (ordinal or Julian date). (Group 2 is an internal backreference.)
export const iso8601DayOnlyRE = lockdownRE(iso8601DayOnlyREString)

const eod = '(24(?<endSep>:?)00\\k<endSep>00)'
const frac = '([.,]\\d+)'
const hr = `(?:([01]\\d|2[0-3])${frac}?)`
const min = `(?:([0-5]\\d)${frac}?)`
const sec = `(?:([0-5]\\d|60)${frac}?)`
const tz = '([zZ]|(?:[+-](?!00(?::?00)?)(?:[01]\\d|2[0-3])(?::?[0-5]\\d)?))'

export const iso8601TimeOnlyREString = `(?:${eod}|${hr}(?:(?<timeSep>:?)${min}(?:\\k<timeSep>${sec})?)?)${tz}?`
// Date/Time: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) style time designation, like '12:12Z'. Provides matching 1 (special instant end of day time), 3 (hour), 4 (decimal fraction of hour), 6 (minute), 7 (decimal fraction of minute), 8 (seconds), 9 (decimal fraction of a second), and 10 (timezone designation). (Groups 2 and 5 are internal back references.)
export const iso8601TimeOnlyRE = lockdownRE(iso8601TimeOnlyREString)

export const iso8601DateREString = `${iso8601DayOnlyREString}(?:T${iso8601TimeOnlyREString})?`
// Date/Time: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date time like '20240101T1212Z. Provides matching groups 1 (year), 3 (month), and 4 (day of month), 5 (week date), 6 (day of week date), and 7 (ordinal or Julian date), 8 (special instant end of day time), 10 (hour), 12 (decimal fraction of hour), 14 (minute), 15(decimal fraction of minute), 16 (seconds), 17 (decimal fraction of a second), and 18 (timezone designation). (Groups 2, 11, and 13 are internal back references.)
export const iso8601DateRE = lockdownRE(iso8601DateREString)

export const iso8601DateTimeREString = `${iso8601DayOnlyREString}T${iso8601TimeOnlyREString}`
// Date/Time: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) _requiring_ both date and time components.
export const iso8601DateTimeRE = lockdownRE(iso8601DateTimeREString)

export const iso8601LooseDateREString = `${iso8601DayOnlyREString}(?:[T\\s]${iso8601TimeOnlyREString})?`
// Date/Time: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-like date time allowing for a space to separate the date and time components instead of requiring a 'T' as the ISO 8601 spec requires, like '20240101 1212Z'. See [`iso8601DateRE`](#iso8601datere) for capture groups.`
export const iso8601LooseDateRE = lockdownRE(iso8601LooseDateREString)

export const iso8601LooseDateTimeREString = `${iso8601DayOnlyREString}[T\\s]${iso8601TimeOnlyREString}`
// Date/Time: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-lke date time allowing for a space to separate the date and time instead of requiring a 'T' and _requiring_ both date and time components, like '20240101 1212Z'. See [`iso8601DateRE`](#iso8601datere) for capture groups.
export const iso8601LooseDateTimeRE = lockdownRE(iso8601LooseDateTimeREString)

export const rfc2822DayOnlyREString = '(?:(Sun|Mon|Tue|Wed|Thu|Fri|Sat),\\s+)?(0[1-9]|[1-2]?[0-9]|3[01])\\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\\s+(\\d{2,4})'
// Date/Tmie: Matches an [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) style date like 'Mon, 6 Jan 1992'. Provides matching groups 1 (day of week), 2 (day of month), 3 (month), and 4 (year).
export const rfc2822DayOnlyRE = lockdownRE(rfc2822DayOnlyREString)

export const rfc2822TimeOnlyREString = '(2[0-3]|[0-1][0-9]):([0-5][0-9])(?::(60|[0-5][0-9]))?(?:\\s+([+-][0-9]{2}[0-5][0-9]|(?:UT|GMT|[A-Z]{3,5}|[A-IK-Z])))?'
export const rfc2822TimeOnlyRE = lockdownRE(rfc2822TimeOnlyREString)
// Date/Time: Matches an [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) style time designation like '12:12 UTC'. Provides matching groups 1 (hour), 2 (min), 3 (second), and 4 (time zone).

export const rfc2822DateREString = `${rfc2822DayOnlyREString}\\s+${rfc2822TimeOnlyREString}`
// Date/Tmie: Matches an [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) style date like 'Mon, 6 Jan 1992 12:12 UTC'. Provides matching groups 1 (day of week), 2 (day of month), 3 (month), and 4 (year), 5 (hour), 6 (min), 7 (second), and 8 (time zone).
export const rfc2822DateRE = lockdownRE(rfc2822DateREString)
