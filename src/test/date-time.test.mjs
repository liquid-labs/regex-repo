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

import { groupTest, groupTestPartial } from './lib/test-lib'
import * as regex from '../date-times'
import { valid8601Dates, invalid8601Dates, valid8601DateTimes, invalid8601DateTimes } from './data/iso-8601-date-times'
import { validIntlDates, invalidIntlDates } from './data/intl-dates'
import { validRFC2822Dates, invalidRFC2822Dates } from './data/rfc-2822-date-times'
import {
  validMilTimes,
  invalidMilTimes,
  validTimes,
  invalidTimes,
  valid24HrTimes,
  invalid24HrTimes,
} from './data/times'
import { validUSDates, invalidUSDates } from './data/us-dates'

groupTest(regex.iso8601DateRe, valid8601Dates, invalid8601Dates, 'ISO 8601 dates')
groupTestPartial("'" + regex.iso8601DateReString + "'", valid8601Dates, invalid8601Dates, 'ISO 8601 dates', "Hi '", "' there");

[
  ['2024-01-15T12:30:40.50+1000', '2024', '01', '15', undefined, undefined, undefined, undefined, '12', undefined, '30', undefined, '40', '50', '+1000'],
  ['2024W055T12:30:40.50+1000', '2024', undefined, undefined, '05', '5', undefined, undefined, '12', undefined, '30', undefined, '40', '50', '+1000'],
  ['2024027T12:30:40.50+1000', '2024', undefined, undefined, undefined, undefined, '027', undefined, '12', undefined, '30', undefined, '40', '50', '+1000'],
  ['2024027T24:00:00+1000', '2024', undefined, undefined, undefined, undefined, '027', '24:00:00', undefined, undefined, undefined, undefined, undefined, undefined, '+1000'],
  ['2024027T12,168+1000', '2024', undefined, undefined, undefined, undefined, '027', undefined, '12', '168', undefined, undefined, undefined, undefined, '+1000'],
  ['2024027T12:30.168+1000', '2024', undefined, undefined, undefined, undefined, '027', undefined, '12', undefined, '30', '168', undefined, undefined, '+1000'],
].forEach(([input, year, month, day, week, dayOfWeek, ordinalDate, endOfDay, hour, hourFrac, minutes, minFrac, seconds, secFrac, timezone]) => {
  const match = input.match(regex.iso8601DateRe)
  test('iso8601Re matches year', () => expect(match[1]).toBe(year))
  test('iso8601Re matches month', () => expect(match[3]).toBe(month))
  test('iso8601Re matches day', () => expect(match[4]).toBe(day))
  test('iso8601Re matches week', () => expect(match[5]).toBe(week))
  test('iso8601Re matches day of week', () => expect(match[6]).toBe(dayOfWeek))
  test('iso8601Re matches ordinal date', () => expect(match[7]).toBe(ordinalDate))
  test('iso8601Re matches end of day', () => expect(match[8]).toBe(endOfDay))
  test('iso8601Re matches hour', () => expect(match[10]).toBe(hour))
  test('iso8601Re matches decimal hour', () => expect(match[11]).toBe(hourFrac))
  test('iso8601Re matches minutes', () => expect(match[13]).toBe(minutes))
  test('iso8601Re matches decimal minutes', () => expect(match[14]).toBe(minFrac))
  test('iso8601Re matches seconds', () => expect(match[15]).toBe(seconds))
  test('iso8601Re matches decimal seconds', () => expect(match[16]).toBe(secFrac))
  test('iso8601Re matches time zone', () => expect(match[17]).toBe(timezone))
})

groupTest(regex.iso8601DateTimeRe, valid8601DateTimes, invalid8601DateTimes, 'ISO 8601 date with time')
groupTestPartial(regex.iso8601DateTimeReString, valid8601DateTimes, invalid8601DateTimes, 'ISO 8601 date with time')

groupTest(regex.rfc2822DateRe, validRFC2822Dates, invalidRFC2822Dates, 'RFC 2822 dates')
groupTestPartial("'" + regex.rfc2822DateReString + "'", validRFC2822Dates, invalidRFC2822Dates, 'RFC 2822 dates', "Hi '", "' there");

[
  ['Mon, 1 Jan 2024 12:30:40 +1000', 'Mon', '1', 'Jan', '2024', '12', '30', '40', '+1000'],
  ['1 Jan 2024 12:30:40 +1000', undefined, '1', 'Jan', '2024', '12', '30', '40', '+1000'],
].forEach(([input, day, dayOfMonth, month, year, hour, minutes, seconds, timezone]) => {
  const match = input.match(regex.rfc2822DateRe)
  test('rfc2822Re matches day', () => expect(match[1]).toBe(day))
  test('rfc2822Re matches day of month', () => expect(match[2]).toBe(dayOfMonth))
  test('rfc2822Re matches month', () => expect(match[3]).toBe(month))
  test('rfc2822Re matches year', () => expect(match[4]).toBe(year))
  test('rfc2822Re matches hour', () => expect(match[5]).toBe(hour))
  test('rfc2822Re matches minutes', () => expect(match[6]).toBe(minutes))
  test('rfc2822Re matches seconds', () => expect(match[7]).toBe(seconds))
  test('rfc2822Re matches timezone', () => expect(match[8]).toBe(timezone))
})

groupTest(regex.usDateRe, validUSDates, invalidUSDates, 'US date')
groupTestPartial(regex.usDateReString, validUSDates, invalidUSDates, 'US date');

[
  ['01/02/2024', '01', '02', undefined, '2024'],
  ['01/02/-2024', '01', '02', '-', '2024'],
].forEach(([input, month, day, ceIndicator, year]) => {
  const match = input.match(regex.usDateRe)
  test('usDateRe matches month', () => expect(match[1]).toBe(month))
  test('usDateRe matches day', () => expect(match[2]).toBe(day))
  test('usDateRe matches ceIndicator', () => expect(match[3]).toBe(ceIndicator))
  test('usDateRe matches year', () => expect(match[4]).toBe(year))
})

groupTest(regex.intlDateRe, validIntlDates, invalidIntlDates, 'intl date')
groupTestPartial(regex.intlDateReString, validIntlDates, invalidIntlDates, 'intl date');

[
  ['2024/01/02', undefined, '2024', '01', '02'],
  ['-2024/01/02', '-', '2024', '01', '02'],
].forEach(([input, ceIndicator, year, month, day]) => {
  const match = input.match(regex.intlDateRe)
  test('intlDateRe matches ceIndicator', () => expect(match[1]).toBe(ceIndicator))
  test('intlDateRe matches year', () => expect(match[2]).toBe(year))
  test('intlDateRe matches month', () => expect(match[3]).toBe(month))
  test('intlDateRe matches day', () => expect(match[4]).toBe(day))
})

groupTest(regex.militaryTimeRe, validMilTimes, invalidMilTimes, 'military time')
groupTestPartial(regex.militaryTimeReString, validMilTimes, invalidMilTimes, 'military time');

[
  ['2400', '2400', undefined, undefined],
  ['2230', undefined, '22', '30'],
].forEach(([input, endOfDay, hours, minutes]) => {
  const match = input.match(regex.militaryTimeRe)
  test('militaryTimeRe matches end of day', () => expect(match[1]).toBe(endOfDay))
  test('militaryTimeRe matches hour', () => expect(match[2]).toBe(hours))
  test('militaryTimeRe matches minutes', () => expect(match[3]).toBe(minutes))
})

groupTest(regex.timeRe, validTimes, invalidTimes, 'time (12 hr)')
groupTestPartial(regex.timeReString, validTimes, invalidTimes, 'time (12 hr)');

[
  ['12:00 AM', '12', '00', undefined, undefined, 'AM'],
  ['8:30:12.93 PM', '8', '30', '12', '93', 'PM'],
].forEach(([input, hours, minutes, seconds, secFrac, amPM]) => {
  const match = input.match(regex.timeRe)
  test('timeRe matches hour', () => expect(match[1]).toBe(hours))
  test('timeRe matches minutes', () => expect(match[2]).toBe(minutes))
  test('timeRe matches seconds', () => expect(match[3]).toBe(seconds))
  test('timeRe matches fractional seconds', () => expect(match[4]).toBe(secFrac))
  test('timeRe matches am/pm', () => expect(match[5]).toBe(amPM))
})

groupTest(regex.twentyFourHourTimeRe, valid24HrTimes, invalid24HrTimes, '24-hour time')
groupTestPartial(regex.twentyFourHourTimeReString, valid24HrTimes, invalid24HrTimes, '24-hour time');

[
  ['12:00', undefined, '12', '00', undefined, undefined],
  ['8:30:12.93', undefined, '8', '30', '12', '93'],
  ['24:00', '24:00', undefined, undefined, undefined, undefined],
].forEach(([input, endOfDay, hours, minutes, seconds, secFrac]) => {
  const match = input.match(regex.twentyFourHourTimeRe)
  test('twentyFourHourTimeRe matches end of day', () => expect(match[1]).toBe(endOfDay))
  test('twentyFourHourTimeRe matches hour', () => expect(match[2]).toBe(hours))
  test('twentyFourHourTimeRe matches minutes', () => expect(match[3]).toBe(minutes))
  test('twentyFourHourTimeRe matches seconds', () => expect(match[4]).toBe(seconds))
  test('twentyFourHourTimeRe matches fractional seconds', () => expect(match[5]).toBe(secFrac))
})
