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
import * as regex from '../ips'
import { goodIPs, badIPs } from './data/ips'
import { goodIPFormats, badIPFormats } from './data/ip-formats'
import { goodIPV6s, badIPV6s } from './data/ipv6s'

groupTest(regex.ipHostRE, goodIPs, badIPs, 'IP address')
groupTestPartial(regex.ipHostREString, goodIPs, badIPs, 'IP address')

groupTest(regex.ipAddressRE, goodIPFormats, badIPFormats, 'IP format')
groupTestPartial(regex.ipAddressREString, goodIPFormats, badIPFormats, 'IP format')

groupTest(regex.ipV6RE, goodIPV6s, badIPV6s, 'IPV6')
groupTestPartial(regex.ipV6REString, goodIPV6s, badIPV6s, 'IPV6')
