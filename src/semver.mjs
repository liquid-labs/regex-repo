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

export const semver2ReString = '(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?'

/**
 * Matches a semantic version string according to the Semantic Versioning 2.0.0 specification.
 * Provides matching groups:
 * - Group 1: major version
 * - Group 2: minor version
 * - Group 3: patch version
 * - Group 4: pre-release version (if present)
 * - Group 5: build metadata (if present)
 * @category semver
 */
export const semver2Re = lockdownRe(semver2ReString)

// the regex is based on the original spec's BNF grammar
// nr ::= '0' | ['1'-'9'] ( ['0'-'9'] ) *
const nr = '(?:0|[1-9][0-9]*)'

// xr ::= 'x' | 'X' | '*' | nr
const xr = `(?:[xX*]|${nr})`

// part ::= nr | [-0-9A-Za-z]+
const part = `(?:${nr}|[-0-9A-Za-z]+)`

// parts ::= part ( '.' part ) *
const parts = `(?:${part})(?:[.](?:${part}))*`

// pre ::= parts
const pre = parts

// build ::= parts
const build = parts

// qualifier ::= ( '-' pre )? ( '+' build )?
const qualifier = `(?:-${pre})?(?:[+]${build})?`

// ---- Composed nonterminals ----

// partial ::= xr ( '.' xr ( '.' xr qualifier ? )? )?
// (Note: qualifier only allowed after the 3rd component)
const partial =
  `${xr}(?:[.]${xr}(?:[.]${xr}${qualifier}?)?)?`

// primitive ::= ( '<' | '>' | '>=' | '<=' | '=' ) partial
// Order matters so >= / <= are tried before > / <.
const primitive = `(?:(?:>=|<=|>|<|=|v)${partial})`

// tilde ::= '~' partial
const tilde = `(?:~${partial})`

// caret ::= '^' partial
const caret = `(?:[\\^]${partial})`

// simpleRange ::= primitive | partial | tilde | caret
// (Order chosen so ~ and ^ don't get mistaken for other forms)
const simpleRange = `(?:${tilde}|${caret}|${primitive}|${partial})`

// hyphen ::= partial ' - ' partial
// EXACT single spaces around the hyphen per BNF.
const hyphenRange = `(?:${partial}[ ][-][ ]${partial})`

// range ::= hyphen | simple ( ' ' simple ) * | ''
// EXACT single spaces between chained simples.
// The empty alternative '' is represented by | at the end.
const range = `(?:${hyphenRange}|${simpleRange}(?:[ ](?:${simpleRange}))*)`

// range-set ::= range ( logical-or range ) *
// logical-or ::= ( ' ' ) * '||' ( ' ' ) *
// Zero-or-more literal spaces around the ||.
const rangeSet = `${range}(?:[ ]*[|][|][ ]*(?:${range}))*`

export const semver2RangeReString = rangeSet

/**
 * Matches a semantic versioning range specification. Allows for optional 'v' prefix (equivalent to '='), and otherwise
 * follows the [original spec's BNF grammar](https://docs.npmjs.com/cli/v6/using-npm/semver#range-grammar). This means
 * that an 'and' space between versions must be a single space and also requires exactly one space around hyphenated
 * ranges.
 * @category semver
 */
export const semver2RangeRe = lockdownRe(semver2RangeReString)
