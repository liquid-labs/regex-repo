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

export const goodEmails = [
  'foo@bar.com',
  'foo@bar.org',
  'foo@bar.xqc',
  'foo@baz.bar.xqc',
  'foo-_18+Z.t%c@Bart-teg38w.co',
  'foo@some.reallylongtld',
  'foo@subb-sub.sub.com',
  'foo@some.reallylongtld',
  '"quote@username"@foo.com'
]

export const badEmails = [
  'foo.bar.com',
  'foo@bar.c',
  'foo@.com'
]

const badDomainChars = ['_', '@', '+', '%']
badDomainChars.forEach((c) => badEmails.push(`foo@bar${c}baz.com`))

export const goodEmailsRFC5322 = [
  ...goodEmails,
  '(comment)foo(comment2)@(comment3)[123.123.123.123](comment4)'
]

export const badEmailsRFC5322 = [
  ...badEmails
]