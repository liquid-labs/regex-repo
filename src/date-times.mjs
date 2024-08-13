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
import { lockdownRe } from './lib/lockdown-re'

// Started RE based on https://www.myintervals.com/blog/2009/05/20/iso-8601-date-validation-that-doesnt-suck/
// Made some corrections, rearranged capture groups.

/**
 * An RE ready string that matches the day designation portion of an ISO 8601 date+time. Provides matching groups 1 (
 * year), 3 (month), and 4 (day of month), 5 (week of year), 6 (day of week date), and 7 (ordinal or Julian date).
 * @category Date time
 */
export const iso8601DayReString = '(?:([+-]?\\d{4})(?:(-?)(?:(0[1-9]|1[0-2])(?:\\2([12]\\d|0[1-9]|3[01])?)?|W([0-4]\\d|5[0-3])\\2([1-7])?|(00[1-9]|0[1-9]\\d|[12]\\d{2}|3(?:[0-5]\\d|6[1-6])))?)?)'

const eod = '(24(?<endSep>:?)00\\k<endSep>00)'
const frac = '(?:[.,](\\d+))'
const hr = `(?:([01]\\d|2[0-3])${frac}?)`
const min = `(?:([0-5]\\d)${frac}?)`
const sec = `(?:([0-5]\\d|60)${frac}?)`
const tz = '([zZ]|(?:[+-](?!00(?::?00)?)(?:[01]\\d|2[0-3])(?::?[0-5]\\d)?))'


export const iso8601TimeReString = `(?:(?:${eod}|${hr}(?:(?<timeSep>:?)${min}(?:\\k<timeSep>${sec})?)?)${tz}?)`
/**
 * Matches the time designation portion of an ISO 8601 date+time. Provides matching groups 1 (special end of day time), 
 * 3 (hours), 3 (fraction of hour), 5 (minutes), 6 (fraction of minute), 7 (seconds), and 8 (fraction of seconds).
 * @category Date time
 */
export const iso8601DateReString = `${iso8601DayReString}(?:T${iso8601TimeReString})?`
/**
 * Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date time like '20240101T1212Z. Provides matching 
 * groups 1 (year), 3 (month), and 4 (day of month), 5 (week of year), 6 (day of week date), and 7 (ordinal or Julian 
 * date), 8 (special end of day time), 10 (hour), 11 (decimal fraction of hour), 13 (minute), 14 (decimal fraction of 
 * minute), 15 (seconds), 16 (decimal fraction of a second), and 17 (timezone designation). (Groups 2, 11, and 13 are 
 * internal back references.)
 * @category Date time
 */
export const iso8601DateRe = lockdownRe(iso8601DateReString)

export const iso8601DateTimeReString = `${iso8601DayReString}T${iso8601TimeReString}`
/**
 * Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) _requiring_ both date and time components. See 
 * {@link iso8601DateRe} for matching groups.
 * @category Date time
 */
export const iso8601DateTimeRe = lockdownRe(iso8601DateTimeReString)

/**
 * An RE ready string that matches the day designation portion of an RFC 2822 date+time. Provides matching groups 1 
 * (day of week name), 2 (day of month), 3 (month name), 4 (year).
 * @category Date time
 */
export const rfc2822DayReString = '(?:(?:(Sun|Mon|Tue|Wed|Thu|Fri|Sat),\\s+)?(0[1-9]|[1-2]?[0-9]|3[01])\\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\\s+(\\d{2,4}))'
/**
 * An RE ready string that matches a general timezone designation; compliant with RFC 2822 timezone portion. Provides 
 * matching groups 1 (timezone).
 * @category Date time
 */
export const timezoneReString = '([+-][0-9]{2}[0-5][0-9]|(?:UT|GMT|[A-Z]{3,5}|[A-IK-Z]))'
/**
 * An RE ready string that matches the time designation portion of an RFC 2822 date+time. Provides matching groups 1 
 * (hour), 2 (minutes), 3 (seconds), and 4 (timezone).
 * @category Date time
 */
export const rfc2822TimeReString = `(?:(2[0-3]|[0-1][0-9]):([0-5][0-9])(?::(60|[0-5][0-9]))?(?:\\s+${timezoneReString})?)`

export const rfc2822DateReString = `${rfc2822DayReString}\\s+${rfc2822TimeReString}`
/**
 * Matches an [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) style date like 'Mon, 6 Jan 1992 
 * 12:12 UTC'. Provides matching groups 1 (day of week), 2 (day of month), 3 (month name), and 4 (year), 5 (hour), 6 
 * (min), 7 (second), and 8 (time zone).
 * @category Date time
 */
export const rfc2822DateRe = lockdownRe(rfc2822DateReString)

const seps = '[./-]'

export const usDateReString = `(0?[1-9]|1[0-2])${seps}(0?[1-9]|[1-2][0-9]|3[0-1])${seps}([+-])?(\\d{1,})`
/**
 * Matches a US style 'MM/DD/YYYY' string. Accepts separators '.', '/', '-'. Will except 1 or 2 digits for month and 
 * day and 1-4 digits for the year. Also accepts a + or - before the year. Provides capture groups 1 (month), 2 (day of 
 * month), 3 (BCE/CE indicator), and 4 (year).
 * @category Date time
 */
export const usDateRe = lockdownRe(usDateReString)

export const intlDateReString = `([+-])?(\\d{1,})${seps}(0?[1-9]|1[0-2])${seps}(0?[1-9]|[1-2][0-9]|3[0-1])`
/**
 * Matches an international style 'YYYY/MM/DD' string. Accepts separators '.', '/', '-'. Will except 1 or 2 digits for 
 * month and day and 1-4 digits for the year. Also accepts a + or - before the year. Provides capture groups 1 (BCE/CE 
 * indicator), 2 (year), 3 (month), 4 (day).
 * @category Date time
 */
export const intlDateRe = lockdownRe(intlDateReString)

export const militaryTimeReString = '(?:(2400)|([0-1][0-9]|2[0-3])([0-5]\\d))'
/**
 * Matches military time style 'HHMM' string. Provides capture groups 1 (special 2400 time), 2 (hour), and 3 (minutes).
 * @category Date time
 */
export const militaryTimeRe = lockdownRe(militaryTimeReString)

export const timeReString = '(?:(0?[1-9]|1[0-2]):([0-5][0-9])(?::([0-5][0-9])(?:[.,](\\d+))?)?\\s*([aApP][mM]))'
/**
 * Matches a twelve hour time designation, requires AM or PM designation. Allows optional leading 0 in hour. Provides 
 * matching groups 1 (hour), 2 (minutes), 3 (seconds, without decimal fractions), 4 (decimal fraction seconds), and 5 (
 * AM/PM indicator).
 * @category Date time
 */
export const timeRe = lockdownRe(timeReString)

export const twentyFourHourTimeReString = '(?:(24:00(?::00)?)|([01]?[0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9])(?:[.,](\\d+))?)?)'
/**
 * Matches a twenty-four hour time designationAllows optional leading 0 in hour. Provides matching groups 1 (special 
 * 24:00 designation with optional seconds), 2 (hour), 3 (minutes), 4 (seconds, without decimal fractions), 5 (decimal 
 * fraction seconds).
 * @category Date time
 */
export const twentyFourHourTimeRe = lockdownRe(twentyFourHourTimeReString)
