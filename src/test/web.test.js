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
import * as regex from '../web'
import { 
    goodFileUrls, badFileUrls,
    goodFTPUrls, badFTPUrls,
    goodHTTPUrls, badHTTPUrls,
    goodMailtoUrls, badMailtoUrls
} from './data/urls'

groupTest(regex.mailtoURLRE, goodMailtoUrls, badMailtoUrls, 'mailto URLs')
groupTestPartial(regex.mailtoURLREString, goodMailtoUrls, badMailtoUrls, 'mailto URLs', undefined, undefined, 'u')

groupTest(regex.httpURLRE, goodHTTPUrls, badHTTPUrls, 'HTTP URLs')
// remove URLs with spaces because those will correctly match on a partial match
groupTestPartial(regex.httpURLREString, goodHTTPUrls, badHTTPUrls.filter((v) => !v.includes(' ')), 'HTTP URLs', undefined, undefined, 'u')

groupTest(regex.ftpURLRE, goodFTPUrls, badFTPUrls, 'FTP URLs')
// remove URLs with spaces because those will correctly match on a partial match
groupTestPartial(regex.ftpURLREString, goodFTPUrls, badFTPUrls.filter((v) => !v.includes(' ')), 'FTP URLs', undefined, undefined, 'u')

groupTest(regex.fileURLRE, goodFileUrls, badFileUrls, 'File URLs')
// remove URLs with spaces because those will correctly match on a partial match
groupTestPartial(regex.fileURLREString, goodFileUrls, badFileUrls.filter((v) => !v.includes(' ')), 'File URLs', undefined, undefined, 'u')

// groupTest(regex.urlRE, goodUrls, badUrls, 'URLs')
// remove URLs with spaces because those will correctly match on a partial match
// groupTestPartial(regex.urlREString, goodUrls, badUrls.filter((v) => !v.includes(' ')), 'URLs', undefined, undefined, 'u')
