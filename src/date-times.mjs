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

// Date/Time: (string only) Matches the day designation portion of an ISO 8601 date+time. Provides matching groups 1 (year), 3 (month), and 4 (day of month), 5 (week of year), 6 (day of week date), and 7 (ordinal or Julian date).
export const iso8601DayREString = '(?:([+-]?\\d{4})(?:(-?)(?:(0[1-9]|1[0-2])(?:\\2([12]\\d|0[1-9]|3[01])?)?|W([0-4]\\d|5[0-3])\\2([1-7])?|(00[1-9]|0[1-9]\\d|[12]\\d{2}|3(?:[0-5]\\d|6[1-6])))?)?)'

const eod = '(24(?<endSep>:?)00\\k<endSep>00)'
const frac = '(?:[.,](\\d+))'
const hr = `(?:([01]\\d|2[0-3])${frac}?)`
const min = `(?:([0-5]\\d)${frac}?)`
const sec = `(?:([0-5]\\d|60)${frac}?)`
const tz = '([zZ]|(?:[+-](?!00(?::?00)?)(?:[01]\\d|2[0-3])(?::?[0-5]\\d)?))'

// Date/Time: (string only) Matches the time designation portion of an ISO 8601 date+time. Provides matching groups 1 (special end of day time), 3 (hours), 3 (fraction of hour), 5 (minutes), 6 (fraction of minute), 7 (seconds), and 8 (fraction of seconds).
export const iso8601TimeREString = `(?:(?:${eod}|${hr}(?:(?<timeSep>:?)${min}(?:\\k<timeSep>${sec})?)?)${tz}?)`

export const iso8601DateREString = `${iso8601DayREString}(?:T${iso8601TimeREString})?`
// Date/Time: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date time like '20240101T1212Z. Provides matching groups 1 (year), 3 (month), and 4 (day of month), 5 (week of year), 6 (day of week date), and 7 (ordinal or Julian date), 8 (special end of day time), 10 (hour), 11 (decimal fraction of hour), 13 (minute), 14 (decimal fraction of minute), 15 (seconds), 16 (decimal fraction of a second), and 17 (timezone designation). (Groups 2, 11, and 13 are internal back references.)
export const iso8601DateRE = lockdownRE(iso8601DateREString)

export const iso8601DateTimeREString = `${iso8601DayREString}T${iso8601TimeREString}`
// Date/Time: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) _requiring_ both date and time components. See [`iso8601DateRE`](#iso8601datere) for matching groups.
export const iso8601DateTimeRE = lockdownRE(iso8601DateTimeREString)

// Date/Time: (string only) Matches the day designation portion of an RFC 2822 date+time. Provides matching groups 1 (day of week name), 2 (day of month), 3 (year).
export const rfc2822DayREString = '(?:(?:(Sun|Mon|Tue|Wed|Thu|Fri|Sat),\\s+)?(0[1-9]|[1-2]?[0-9]|3[01])\\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\\s+(\\d{2,4}))'
// Date/Time: (string only) Matches a general timezone designation; compliant with RFC 2822 timezone portion. Provides matching groups 1 (timezone).
export const timezoneREString = '([+-][0-9]{2}[0-5][0-9]|(?:UT|GMT|[A-Z]{3,5}|[A-IK-Z]))'
// Date/Time: (string only) Matches the time designation portion of an RFC 2822 date+time. Provides matching groups 1 (hour), 2 (minutes), 3 (seconds), and 4 (timezone).
export const rfc2822TimeREString = `(?:(2[0-3]|[0-1][0-9]):([0-5][0-9])(?::(60|[0-5][0-9]))?(?:\\s+${timezoneREString})?)`

export const rfc2822DateREString = `${rfc2822DayREString}\\s+${rfc2822TimeREString}`
// Date/Tmie: Matches an [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) style date like 'Mon, 6 Jan 1992 12:12 UTC'. Provides matching groups 1 (day of week), 2 (day of month), 3 (month), and 4 (year), 5 (hour), 6 (min), 7 (second), and 8 (time zone).
export const rfc2822DateRE = lockdownRE(rfc2822DateREString)

const seps = '[./-]'

export const usDateREString = `(0?[1-9]|1[0-2])${seps}(0?[1-9]|[1-2][0-9]|3[0-1])${seps}([+-])?(\\d{1,})`
// Date/Time: Matches a US style 'MM/DD/YYYY' string. Accepts separators '.', '/', '-'. Will except 1 or 2 digits for month and day and 1-4 digits for the year. Also accepts a + or - before the year. Provides capture groups 1 (month), 2 (day of month), 3 (BCE/CE indicator), and 4 (year).
export const usDateRE = lockdownRE(usDateREString)

export const intlDateREString = `([+-])?(\\d{1,})${seps}(0?[1-9]|1[0-2])${seps}(0?[1-9]|[1-2][0-9]|3[0-1])`
// Date/Time: Matches an international style 'YYYY/MM/DD' string. Accepts separators '.', '/', '-'. Will except 1 or 2 digits for month and day and 1-4 digits for the year. Also accepts a + or - before the year. Provides capture groups 1 (BCE/CE indicator), 2 (year), 3 (month), 4 (day).
export const intlDateRE = lockdownRE(intlDateREString)

export const militaryTimeREString = '(?:(2400)|([0-1][0-9]|2[0-3])([0-5]\\d))'
// Date/Time: Matches military time style 'HHMM' string. Provides capture groups 1 (special 2400 time), 2 (hour), and 3 (minutes).
export const militaryTimeRE = lockdownRE(militaryTimeREString)

export const timeREString = '(?:(0?[1-9]|1[0-2]):([0-5][0-9])(?::([0-5][0-9])(?:[.,](\\d+))?)?\\s*([aApP][mM]))'
// Date/Time: Matches a twelve hour time designation, requires AM or PM designation. Allows optional leading 0 in hour. Provides matching groups 1 (hour), 2 (minutes), 3 (seconds, without decimal fractions), 4 (decimal fraction seconds), and 5 (AM/PM indicator).
export const timeRE = lockdownRE(timeREString)

export const twentyFourHourTimeREString = '(?:(24:00(?::00)?)|(0?[1-9]|1[0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9])(?:[.,](\\d+))?)?)'
// Date/Time: Matches a twenty-four hour time designationAllows optional leading 0 in hour. Provides matching groups 1 (special 24:00 designation with optional seconds), 2 (hour), 3 (minutes), 4 (seconds, without decimal fractions), 5 (decimal fraction seconds).
export const twentyFourHourTimeRE = lockdownRE(twentyFourHourTimeREString)
