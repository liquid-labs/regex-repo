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

export const validRFC2822Days = [
  'Mon, 6 Jan 1992',
  '6 Jan 1992'
]

export const invalidRFC2822Days = [
  'Foo, 6 Jan 1992',
  'Jan 6 1992'
]

export const validRFC2822Times = [
  '00:00',
  '12:12',
  '12:12:12',
  '12:12:60', // leap second
  '12:12 GMT',
  '12:12 A',
  '12:12 UT',
  '12:12:12 A',
  '12:12 +0000',
  '12:12 +1200',
  '12:12 -0000',
  '12:12 -1200',
  '12:12:12 +1200',
  '03:12'
]

export const invalidRFC2822Times = [
  '3:00',
  '24:00',
  '12:60',
  '12:59:61',
  '12:12 J',
  '12:12 +12',
  '12:12 +123',
  '12:12 +1260'
]

export const validRFC2822Dates = [
  'Mon, 7 Jan 1992 12:12',
  '6 Jan 1992 12:12 UT',
  '6 Jan 1992 12:13:14 UT',
]

export const invalidRFC2822Dates = [
  '32 Jan 1992 12:12',
  '06 Jan 1922T12:12',
  '06 Jan 1992 25:12'
]
