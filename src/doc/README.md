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

