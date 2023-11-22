# regex-repo
[![coverage: 100%](./.readme-assets/coverage.svg)](https://google.com) [![Unit tests](https://github.com/liquid-labs/regex-repo/actions/workflows/unit-tests-node.yaml/badge.svg)](https://github.com/liquid-labs/regex-repo/actions/workflows/unit-tests-node.yaml)

regex-repo is a collection of regular expressions. Refer to the [regex reference](#regex-reference) below for a list of the provided REs.

## Installation

```bash
npm i @liquid-labs/regex-repo
```

## Usage

```javascript
import { emailRE } from '@liquid-labs/regex-repo'
// import * as regex from '@liquid-labs/regex-repo'

const verified = emailRE.test(userInput)
```

## Regex reference

Each regular expression listed below is paired with an exported embeddable string named `xxxString`. E.g., `rgbRE` is paired with `rgbREString`. While the RE is pinned to the beginning and end of the value; i.e, the RE begins with '^' and ends with '$', the string does not. It is up to the user to identify token seperators when using the RE strings. E.g., if using `rgbREString` in a larger RE, one might do something like:

```javascript
import { rgbREString } from '@liquid-labs/regex-repo'

const allColors = cssContent
  .matchAll(new RegExp(`[ :](${rgbREString})`)).map((match) => match[1])
  .filter((v, i, arr) => i === arr.indexOf(v)) // filter non-unique items
  .sort()
```
