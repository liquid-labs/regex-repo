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
import {
  valid8601DatesOnly,
  invalid8601DatesOnly,
  valid8601TimesOnly,
  invalid8601TimesOnly,
  valid8601Dates,
  invalid8601Dates,
  valid8601DateTimes,
  invalid8601DateTimes,
  valid8601LooseDates,
  invalid8601LooseDates,
  valid8601LooseDateTimes,
  invalid8601LooseDateTimes
} from './data/iso-8601-date-times'

import {
  validRFC2822Days,
  invalidRFC2822Days,
  validRFC2822Times,
  invalidRFC2822Times,
  validRFC2822Dates,
  invalidRFC2822Dates
} from './data/rfc-2822-date-times'

groupTest(regex.iso8601DateRE, valid8601Dates, invalid8601Dates, 'ISO 8601 dates')
groupTestPartial("'" + regex.iso8601DateREString + "'", valid8601Dates, invalid8601Dates, 'ISO 8601 dates', "Hi '", "' there")

groupTest(regex.iso8601DateTimeRE, valid8601DateTimes, invalid8601DateTimes, 'ISO 8601 date with time')
groupTestPartial(regex.iso8601DateTimeREString, valid8601DateTimes, invalid8601DateTimes, 'ISO 8601 date with time')

groupTest(regex.rfc2822DateRE, validRFC2822Dates, invalidRFC2822Dates, 'RFC 2822 dates')
groupTestPartial("'" + regex.rfc2822DateREString + "'", validRFC2822Dates, invalidRFC2822Dates, 'RFC 2822 dates', "Hi '", "' there")
