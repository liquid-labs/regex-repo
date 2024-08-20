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
import * as regex from '../url'
import {
  goodCommonURLs, badCommonURLs,
  goodFileUrls, badFileUrls,
  goodFTPUrls, badFTPUrls,
  goodHTTPUrls, badHTTPUrls,
  goodMailtoUrls, badMailtoUrls,
  goodUrls, badURLs,
} from './data/urls'

groupTest(regex.urlRe, goodUrls, badURLs, 'URL')
// remove URLs with spaces because those will correctly match on a partial match
groupTestPartial(regex.urlReString, goodUrls, badURLs.filter((v) => !v.includes(' ')), 'URL', undefined, undefined, 'u')

groupTest(regex.mailtoUrlRe, goodMailtoUrls, badMailtoUrls, 'mailto URLs')
groupTestPartial(regex.mailtoUrlReString, goodMailtoUrls, badMailtoUrls, 'mailto URLs', undefined, undefined, 'u')

groupTest(regex.httpUrlRe, goodHTTPUrls, badHTTPUrls, 'HTTP URLs')
// remove URLs with spaces because those will correctly match on a partial match
groupTestPartial(regex.httpUrlReString, goodHTTPUrls, badHTTPUrls.filter((v) => !v.includes(' ')), 'HTTP URLs', undefined, undefined, 'u')

groupTest(regex.ftpUrlRe, goodFTPUrls, badFTPUrls, 'FTP URLs')
// remove URLs with spaces because those will correctly match on a partial match
groupTestPartial(regex.ftpUrlReString, goodFTPUrls, badFTPUrls.filter((v) => !v.includes(' ')), 'FTP URLs', undefined, undefined, 'u')

groupTest(regex.fileUrlRe, goodFileUrls, badFileUrls, 'File URLs')
// remove URLs with spaces because those will correctly match on a partial match
groupTestPartial(regex.fileUrlReString, goodFileUrls, badFileUrls.filter((v) => !v.includes(' ')), 'File URLs', undefined, undefined, 'u')

groupTest(regex.commonUrlRe, goodCommonURLs, badCommonURLs, 'File URLs')
// remove URLs with spaces because those will correctly match on a partial match
groupTestPartial(regex.commonUrlReString, goodCommonURLs, badCommonURLs.filter((v) => !v.includes(' ')), 'File URLs', undefined, undefined, 'u')
