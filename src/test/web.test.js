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
import { goodDomainNames, badDomainNames } from './data/domains'
import { goodFQDomainNames, badFQDomainNames } from './data/fq-domains'
import { goodIPs, badIPs } from './data/ips'
import { goodIPFormats, badIPFormats } from './data/ip-formats'
import { goodIPV6s, badIPV6s } from './data/ipv6s'
import { goodTLDs, badTLDs } from './data/tlds'
import { 
    goodFileUrls, badFileUrls,
    goodFTPUrls, badFTPUrls,
    goodHTTPUrls, badHTTPUrls,
    goodMailtoUrls, badMailtoUrls
} from './data/urls'

groupTest(regex.domainLabelRE, goodDomainNames, badDomainNames, 'subdomain label')
groupTestPartial(regex.domainLabelREString, goodDomainNames, badDomainNames, 'subdomain label', undefined, undefined, 'u')

groupTest(regex.fqDomainNameRE, goodFQDomainNames, badFQDomainNames, 'FQ domain names')
groupTestPartial(regex.fqDomainNameREString, goodFQDomainNames, badFQDomainNames, 'FQ domain names', undefined, undefined, 'u')

groupTest(regex.ipHostRE, goodIPs, badIPs, 'IP address')
groupTestPartial(regex.ipHostREString, goodIPs, badIPs, 'IP address')

groupTest(regex.ipAddressRE, goodIPFormats, badIPFormats, 'IP format')
groupTestPartial(regex.ipAddressREString, goodIPFormats, badIPFormats, 'IP format')

groupTest(regex.ipV6RE, goodIPV6s, badIPV6s, 'IPV6')
groupTestPartial(regex.ipV6REString, goodIPV6s, badIPV6s, 'IPV6')

const goodLocalhosts = ['127.0.0.1', '127.34.0.255', 'localhost', '::1', '0:0:0:0:0:0:0:1']
const badLocalhosts = ['128.0.0.1', 'localhosts', '::2']

groupTest(regex.localhostRE, goodLocalhosts, badLocalhosts, 'localhosts')
groupTestPartial(regex.localhostREString, goodLocalhosts, badLocalhosts, 'localhosts')

groupTest(regex.tldNameRE, goodTLDs, badTLDs, 'TLDs')
groupTestPartial(regex.tldNameREString, goodTLDs, badTLDs, 'TLDs', undefined, undefined, 'u')

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
