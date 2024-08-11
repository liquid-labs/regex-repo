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
import * as regex from '../network'
import { goodIps, badIps, goodIpFormats, badIpFormats, goodIpV6s, badIpV6s } from './data/network'

groupTest(regex.ipHostRe, goodIps, badIps, 'IP address')
groupTestPartial(regex.ipHostReString, goodIps, badIps, 'IP address')

groupTest(regex.ipAddressRe, goodIpFormats, badIpFormats, 'IP format')
groupTestPartial(regex.ipAddressReString, goodIpFormats, badIpFormats, 'IP format')

groupTest(regex.ipV6Re, goodIpV6s, badIpV6s, 'IPV6')
groupTestPartial(regex.ipV6ReString, goodIpV6s, badIpV6s, 'IPV6')
