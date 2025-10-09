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
import * as regex from '../npm'
import {
  validNpmPackageNames,
  invalidNpmPackageNames,
  npmPackageNameCaptureGroupInputs,
  npmPackageNameCaptureGroupMatches,
  validNpmPackageTags,
  invalidNpmPackageTags,
  validNpmPackageSpecs
} from './data/npm'

groupTest(regex.npmPackageNameRe, validNpmPackageNames, invalidNpmPackageNames, 'NPM package names')
groupTestPartial(regex.npmPackageNameReString, validNpmPackageNames, invalidNpmPackageNames, 'NPM package names')
testCaptureGroups(regex.npmPackageNameRe, npmPackageNameCaptureGroupInputs, npmPackageNameCaptureGroupMatches, 'NPM package name capture groups')

groupTest(regex.npmPackageTagRe, validNpmPackageTags, invalidNpmPackageTags, 'NPM package tags')
// Note: Partial matching not tested for tags since any non-semver substring matches

groupTest(regex.npmPackageSpecRe, validNpmPackageSpecs, [], 'NPM package specs')
