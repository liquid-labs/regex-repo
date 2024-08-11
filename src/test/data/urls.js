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

import { goodEmails, badEmails } from './emails'

export const badURLs = [
  '//',
  '//a',
  '///a',
  '///',
  'foo.com',
  ':// should fail'
]

// test data cribbed from : https://mathiasbynens.be/demo/url-regex
export const goodHTTPUrls = [
  'http://foo.com/blah_blah',
  'http://foo.com/blah_blah/',
  'http://foo.com/blah_blah_(wikipedia)',
  'http://foo.com/blah_blah_(wikipedia)_(again)',
  'http://www.example.com/wpstyle/?p=364',
  'https://www.example.com/foo/?bar=baz&inga=42&quux',
  'http://✪df.ws/123',
  'http://userid:password@example.com:8080',
  'http://userid:password@example.com:8080/',
  'http://userid@example.com',
  'http://userid@example.com/',
  'http://userid@example.com:8080',
  'http://userid@example.com:8080/',
  'http://userid:password@example.com',
  'http://userid:password@example.com/',
  'http://123.com',
  'http://142.42.1.1/',
  'http://142.42.1.1:8080/',
  'http://➡.ws/䨹',
  'http://⌘.ws',
  'http://⌘.ws/',
  'http://foo.com/blah_(wikipedia)#cite-1',
  'http://foo.com/blah_(wikipedia)_blah#cite-1',
  'http://foo.com/unicode_(✪)_in_parens',
  'http://foo.com/(something)?after=parens',
  'http://☺.damowmow.com/',
  'http://code.google.com/events/#&product=browser',
  'http://j.mp',
  'http://foo.bar/?q=Test%20URL-encoded%20stuff',
  'http://مثال.إختبار',
  'http://例子.测试',
  'http://उदाहरण.परीक्षा',
  'http://-.~_!$&\'()*+,;=:%40:80%2f::::::@example.com',
  'http://1337.net',
  'http://a.b-c.de',
  'http://223.255.255.254',
  'http://some.reallylongtld',
  'http://a.b--c.de/',
  'https://user:pasword@foo.com:123/path/part?q=1#fragment'
]

export const badHTTPUrls = [
  'http://',
  'http://.',
  'http://..',
  'http://../',
  'http://?',
  'http://??',
  'http://??/',
  'http://#',
  'http://##',
  'http://##/',
  'http://foo.bar?q=Spaces should be encoded',
  'http://-error-.invalid/',
  'http://-a.b.co',
  'http://a.b-.co',
  'http://0.0.0.0',
  'http://10.1.1.0',
  'http://10.1.1.255',
  'http://224.1.1.1',
  'http://1.1.1.1.1',
  'http://123.123.123',
  'http://3628126748',
  'http://.www.foo.bar/',
  'http://www.foo.bar./',
  'http://.www.foo.bar./',
  'http://some.really-long-tld-with-dashes',
  'http:///a',
  'http:// shouldfail.com',
  'http://foo.bar/foo(bar)baz quux',
  ...badURLs
]

export const goodFTPUrls = [
  'ftp://foo.bar/baz',
  'ftp://user:pasword@foo.com:123/path/part'
]

export const badFTPUrls = [
  'ftps://foo.bar/',
  'ftp://user:pasword@foo.com:123/path/part?query',
  'ftp://user:pasword@foo.com:123/path/part#fragment',
  ...badURLs
]

export const goodFileUrls = [
  'file://host.com/path/to/something',
  'file://host.com/',
  'file:///path/to/something'
]

export const badFileUrls = [
  'file://naked-host.com',
  ...badURLs
]

export const goodMailtoUrls = goodEmails.map((email) => 'mailto:' + email)

export const badMailtoUrls = [
  ...(badEmails.map((email) => 'mailto:' + email)),
  ...badURLs
]

export const goodGeniricUrls = [
  'rdar://1234',
  'h://test',
  ...goodFTPUrls,
  ...goodHTTPUrls,
  ...goodMailtoUrls
]
