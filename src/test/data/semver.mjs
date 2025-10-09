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

export const validSemver2 = [
  '0.0.0',
  '0.0.1',
  '0.1.0',
  '1.0.0',
  '1.2.3',
  '10.20.30',
  '999.999.999',
  '1.0.0-alpha',
  '1.0.0-alpha.1',
  '1.0.0-0.3.7',
  '1.0.0-x.7.z.92',
  '1.0.0-x-y-z.--',
  '1.0.0-alpha+001',
  '1.0.0+20130313144700',
  '1.0.0-beta+exp.sha.5114f85',
  '1.0.0+21AF26D3----117B344092BD',
  '1.0.0-alpha.beta',
  '1.0.0-alpha.beta.1',
  '1.0.0-alpha.1.beta.2',
  '1.0.0-rc.1+build.1',
  '2.0.0-rc.1+build.123',
]

export const invalidSemver2 = [
  '',
  '1',
  '1.2',
  '01.1.1',
  '1.01.1',
  '1.1.01',
  'v1.0.0',
  '1.0.0-',
  '1.0.0-+invalid',
  '1.0.0-alpha_beta',
  '1.0.0-alpha..beta',
  '1.0.0-01',
  '1.0.0-alpha.01',
  '1.0.0+',
  '1.0.0+invalid_meta',
  '1.0.0-alpha+',
  '+invalid',
  '-invalid',
  'a.b.c',
  '1.0.0-alpha!beta',
]

export const semver2CaptureGroupInputs = [
  '1.2.3',
  '10.20.30',
  '1.0.0-alpha',
  '1.0.0-alpha.1',
  '1.0.0-alpha+001',
  '1.0.0+20130313144700',
  '1.0.0-beta+exp.sha.5114f85',
  '2.0.0-rc.1+build.123',
]

export const semver2CaptureGroupMatches = [
  ['1', '2', '3', undefined, undefined],
  ['10', '20', '30', undefined, undefined],
  ['1', '0', '0', 'alpha', undefined],
  ['1', '0', '0', 'alpha.1', undefined],
  ['1', '0', '0', 'alpha', '001'],
  ['1', '0', '0', undefined, '20130313144700'],
  ['1', '0', '0', 'beta', 'exp.sha.5114f85'],
  ['2', '0', '0', 'rc.1', 'build.123'],
]

// Valid semver range specifications
export const validSemver2Range = [
  // Exact versions
  '0.0.0',
  '0.0.1',
  '0.1.0',
  '1.2.3',
  '10.20.30',
  '999.999.999',
  '1.2.3+build.1',
  '1.2.3+exp.sha.5114f85',
  '1.2.3-alpha.1+build.42',
  '1.2.3-01',
  '=1.2.3',

  // Wildcards and X-ranges
  '*',
  'x',
  'X',
  '1.x',
  '1.X',
  '1.*',
  '1.2.x',
  '1.2.*',
  '0.x',
  '0.0.x',

  // Tilde ranges
  '~1',
  '~1.2',
  '~1.2.3',
  '~0',
  '~0.2',
  '~0.2.3',
  '~10.20.30',

  // Caret ranges
  '^1',
  '^1.2',
  '^1.2.3',
  '^0',
  '^0.2',
  '^0.2.3',
  '^0.0',
  '^0.0.3',

  // Inequalities (comparators)
  '>0.0.0',
  '>=1.2.3',
  '<2.0.0',
  '<=2.0.0',
  '>=1.2.3-alpha.1',
  '<1.3.0-0',

  // Hyphen ranges
  '1.2.3 - 2.3.4',
  '1.2 - 2.3',
  '1.2.3 - 2.3',
  '1.2 - 2',
  '0.1.0 - 0.2.5',
  '1.2.3-alpha.1 - 1.2.3',

  // Mixed partials
  '1',
  '1.2',
  '0',
  '0.0',
  '2',
  '2.5',
  'v1',
  'v1.2',

  // AND (space-separated comparator sets)
  '>=1.2.3 <2.0.0',
  '>1.2.3 <=2.3.4',
  '>=0.0.0 <1.0.0',
  '>=1.2.3-alpha.1 <1.3.0',

  // OR (||) unions
  '^1.2.3 || ^2.0.0',
  '~1.2.3 || >=2.0.0 <3.0.0',
  '1.x || >=2.0.0 <2.1.0',
  '>=0.0.0 <1.0.0 || >=2.0.0',

  // Prerelease ranges and exacts
  '1.2.3-alpha',
  '1.2.3-alpha.1',
  '1.2.3-rc.0',
  '1.2.3-rc.1+build.7',
  '>=1.2.3-alpha.1 <1.3.0',
  '^1.2.3-alpha.1',
  '1.2.3-alpha.1 - 1.2.4-0',

  // Build metadata examples
  '2.3.4+build',
  '2.3.4+build.11.e0f985a',
  '2.3.4-rc.1+build.11',

  // Loose 'v' prefix (accepted by many tools)
  'v1.2.3',
  'v0.1.0',
  'v1.2.3-alpha.1',
  'v1.2.3+build.5',
]

// partials will match sub-parts of the range, so is a more limited set than invalid semver ranges
export const invalidSemver2RangePartials = [
  '',
  '01.2.3',
  '1.2.3.4',
  '1.02.3',
  '1.2.03',
  'a.b.c',
  '1.2.-3',
  '1.2.x.y',
  'x.y.z',
  '1.*.*.*',
  '=>1.2.3',
  '><1.2.3',
  '~>1.2.3',
  '1.2.3-alpha..1',
  '1.2.3-alpha.',
  '1.2.3-alpha!1',
  '1.2.3+build..1',
  '1.2.3+!build',
  'v',
  'v.1',
  'v.1.2',
  'latest',
  'next',
  'canary',
  'git+https://example.com/repo.git#v1.2.3',
  '~',
  '^',
  '>',
  '>=',
  '<',
  '<=',
]

// Invalid semver range specifications
export const invalidSemver2Range = [
  ...invalidSemver2RangePartials,
  '>=1.2.3, <2.0.0',
  '1.2.3 -- 2.0.0',
  '1.2.3 -',
  '- 1.2.3',
  '(>=1.2.3 <2.0.0)',
  '>=1.2.3    <2.0.0', // the spec is picky about 'and' spaces
  '|| ^1.2.3',
  '^1.2.3 ||',
  '^1.2.3 || || ^2.0.0',
  '>= 1.2.3 < 2.0.0',
  '>= 1.2.3    < 2.0 .0',
  '>=1.2.3  <  2.0.0 ||',
]
