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
import { goodUrls, badUrls } from './data/urls'

groupTest(regex.subdomainLabelRE, goodDomainNames, badDomainNames, 'subdomain label')
groupTestPartial(regex.subdomainLabelREString, goodDomainNames, badDomainNames, 'subdomain label', undefined, undefined, 'u')

groupTest(regex.fqDomainNameRE, goodFQDomainNames, badFQDomainNames, 'FQ domain names')
groupTestPartial(regex.fqDomainNameREString, goodFQDomainNames, badFQDomainNames, 'FQ domain names', undefined, undefined, 'u')

groupTest(regex.ipRE, goodIPs, badIPs, 'IP address')
groupTestPartial(regex.ipREString, goodIPs, badIPs, 'IP address')

groupTest(regex.ipFormatRE, goodIPFormats, badIPFormats, 'IP format')
groupTestPartial(regex.ipFormatREString, goodIPFormats, badIPFormats, 'IP format')

groupTest(regex.ipV6RE, goodIPV6s, badIPV6s, 'IPV6')
groupTestPartial(regex.ipV6REString, goodIPV6s, badIPV6s, 'IPV6')

groupTest(regex.tldNameRE, goodTLDs, badTLDs, 'TLDs')
groupTestPartial(regex.tldNameREString, goodTLDs, badTLDs, 'TLDs', undefined, undefined, 'u')

groupTest(regex.urlRE, goodUrls, badUrls, 'URLs')
// remove URLs with spaces because those will correctly match on a partial match
groupTestPartial(regex.urlREString, goodUrls, badUrls.filter((v) => !v.includes(' ')), 'URLs', undefined, undefined, 'u')
