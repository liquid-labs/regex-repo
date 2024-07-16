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

import { validRFC2822Dates, invalidRFC2822Dates } from './data/rfc-2822-date-times'

groupTest(regex.iso8601DateRE, valid8601Dates, invalid8601Dates, 'ISO 8601 dates')
groupTestPartial("'" + regex.iso8601DateREString + "'", valid8601Dates, invalid8601Dates, 'ISO 8601 dates', "Hi '", "' there");

[
  ['2024-01-15T12:30:40.50+1000', '2024', '01', '15', undefined, undefined, undefined, undefined, '12', undefined, '30', undefined, '40', '50', '+1000'],
  ['2024W055T12:30:40.50+1000', '2024', undefined, undefined, '05', '5', undefined, undefined, '12', undefined, '30', undefined, '40', '50', '+1000'],
  ['2024027T12:30:40.50+1000', '2024', undefined, undefined, undefined, undefined, '027', undefined, '12', undefined, '30', undefined, '40', '50', '+1000'],
  ['2024027T24:00:00+1000', '2024', undefined, undefined, undefined, undefined, '027', '24:00:00', undefined, undefined, undefined, undefined, undefined, undefined, '+1000'],
  ['2024027T12,168+1000', '2024', undefined, undefined, undefined, undefined, '027', undefined, '12', '168', undefined, undefined, undefined, undefined, '+1000'],
  ['2024027T12:30.168+1000', '2024', undefined, undefined, undefined, undefined, '027', undefined, '12', undefined, '30', '168', undefined, undefined, '+1000'],
].forEach(([input, year, month, day, week, dayOfWeek, ordinalDate, endOfDay, hour, hourFrac, minutes, minFrac, seconds, secFrac, timezone]) => {
    const match = input.match(regex.iso8601DateRE)
    test('matches year', () => expect(match[1]).toBe(year))
    test('matches month', () => expect(match[3]).toBe(month))
    test('matches day', () => expect(match[4]).toBe(day))
    test('matches week', () => expect(match[5]).toBe(week))
    test('matches day of week', () => expect(match[6]).toBe(dayOfWeek))
    test('matches ordinal date', () => expect(match[7]).toBe(ordinalDate))
    test('matches end of day', () => expect(match[8]).toBe(endOfDay))
    test('matches hour', () => expect(match[10]).toBe(hour))
    test('matches decimal hour', () => expect(match[11]).toBe(hourFrac))
    test('matches minutes', () => expect(match[13]).toBe(minutes))
    test('matches decimal minutes', () => expect(match[14]).toBe(minFrac))
    test('matches seconds', () => expect(match[15]).toBe(seconds))
    test('matches decimal seconds', () => expect(match[16]).toBe(secFrac))
    test('matches time zone', () => expect(match[17]).toBe(timezone))  
})

groupTest(regex.iso8601DateTimeRE, valid8601DateTimes, invalid8601DateTimes, 'ISO 8601 date with time')
groupTestPartial(regex.iso8601DateTimeREString, valid8601DateTimes, invalid8601DateTimes, 'ISO 8601 date with time')

groupTest(regex.rfc2822DateRE, validRFC2822Dates, invalidRFC2822Dates, 'RFC 2822 dates')
groupTestPartial("'" + regex.rfc2822DateREString + "'", validRFC2822Dates, invalidRFC2822Dates, 'RFC 2822 dates', "Hi '", "' there")
