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

import { lockdownRe } from './lib/lockdown-re'
import { semver2RangeReString } from './semver'

export const npmPackageNameReString = '(@[a-z0-9-~][a-z0-9-._~]*/)?([a-z0-9-~][a-z0-9-._~]*)'

/**
 * Matches an NPM package name. Provides matching groups 1 (org name,
 * if any) and 2 (package basename).
 * @category NPM
 */
export const npmPackageNameRe = lockdownRe(npmPackageNameReString)

const npmPackageTagReString = `^(?!${semver2RangeReString}$)`

/**
 * Matches an NPM package tag. A tag can, in theory, be anything that cannot be confused with a semver range. Due to
 * the requirements of RE construction, the RE string ends up being useless for partial matches so is *NOT* exported.
 * @category NPM
 */
export const npmPackageTagRe = new RegExp(npmPackageTagReString)

// since a package spec is a semver or not a semver, any non-blank string is valid
export const npmPackageSpecReString = '.+'

/**
 * Matches an NPM package specification. Note, because any string that cannot be confused with a semver is, in theory,
 * a valid tag, this could be any string.
 * @category NPM
 */
export const npmPackageSpecRe = lockdownRe(npmPackageSpecReString)
