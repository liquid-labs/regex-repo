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

import { groupTest } from './lib'
import * as regex from './index'
import { goodUrls, badUrls } from './test-data/urls'
import { goodEmails, badEmails } from './test-data/emails'

groupTest(regex.urlRE, goodUrls, badUrls)
groupTest(regex.emailRE, goodEmails, badEmails)
groupTest(regex.emailEncodedOrNotRE,
  goodEmails.map((e) => e.replace('@', '%40')),
  badEmails.map((e) => e.replace('@', '%40')))
