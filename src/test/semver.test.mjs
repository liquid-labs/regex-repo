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

import { groupTest, groupTestPartial, testCaptureGroups } from './lib/test-lib'
import * as regex from '../semver'
import {
  validSemver2,
  invalidSemver2,
  semver2CaptureGroupInputs,
  semver2CaptureGroupMatches,
  validSemver2Range,
  invalidSemver2Range,
  invalidSemver2RangePartials
} from './data/semver'

groupTest(regex.semver2Re, validSemver2, invalidSemver2, 'semver2')
groupTestPartial(regex.semver2ReString, validSemver2, invalidSemver2, 'semver2')
testCaptureGroups(regex.semver2Re, semver2CaptureGroupInputs, semver2CaptureGroupMatches, 'semver2 capture groups')

groupTest(regex.semver2RangeRe, validSemver2Range, invalidSemver2Range, 'semver2Range')
groupTestPartial(regex.semver2RangeReString, validSemver2Range, invalidSemver2RangePartials, 'semver2Range')
