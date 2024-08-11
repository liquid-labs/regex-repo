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
import * as regex from '../domain-name'
import { goodDomainNames, badDomainNames } from './data/domains'
import { goodFQDomainNames, badFQDomainNames } from './data/fq-domains'
import { goodTLDs, badTLDs } from './data/tlds'

groupTest(regex.domainLabelRe, goodDomainNames, badDomainNames, 'subdomain label')
groupTestPartial(regex.domainLabelReString, goodDomainNames, badDomainNames, 'subdomain label', undefined, undefined, 'u')

groupTest(regex.fqDomainNameRe, goodFQDomainNames, badFQDomainNames, 'FQ domain names')
groupTestPartial(regex.fqDomainNameReString, goodFQDomainNames, badFQDomainNames, 'FQ domain names', undefined, undefined, 'u')

const goodLocalhosts = ['127.0.0.1', '127.34.0.255', 'localhost', '::1', '0:0:0:0:0:0:0:1']
const badLocalhosts = ['128.0.0.1', 'localhosts', '::2']

groupTest(regex.localhostRe, goodLocalhosts, badLocalhosts, 'localhosts')
groupTestPartial(regex.localhostReString, goodLocalhosts, badLocalhosts, 'localhosts')

groupTest(regex.tldNameRe, goodTLDs, badTLDs, 'TLDs')
groupTestPartial(regex.tldNameReString, goodTLDs, badTLDs, 'TLDs', undefined, undefined, 'u')
