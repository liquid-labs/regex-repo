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

### CSS numbers

- __zeroTo100FloatPercentRE__: Matches a 0 to 100% float as used in CSS color specifications.
- __zeroTo100PercentRE__: Matches a 0 to 100% integer as used in CSS color specifications.
- __zeroTo1FloatRE__: Matches a 0 to 1 float as used in CSS color specifications.
- __zeroTo255FloatRE__: Matches a 0 to 255 float as used in CSS color specifications.
- __zeroTo255RE__: Matches a 0 to 255 integer as used in CSS color specifications.
- __zeroTo360FloatRE__: Matches a 0 to 360 float as used in CSS color specifications.
- __zeroTo360RE__: Matches a 0 to 360 integer as used in CSS color specifications.

### Colors/CSS

- __cssColor3RE__: Matches CSS3 'hex, rgb, rgba, hsl, and predefined colors.
- __cssColorRE__: Matches CSS4 'hex, rgb, rgba, hsl, and predefined colors.
- __cssPreColors1RE__: Matches CSS1 predefined color names.
- __cssPreColors2RE__: Matches CSS2 predefined color names.
- __cssPreColors3RE__: Matches CSS3 predefined color names.
- __cssPreColorsRE__: Matches CSS4 predefined color names.
- __hexColorAlphaRE__: Matches hex specified RGBA colors with an alpha channel.
- __hexColorNoAlphaRE__: Matches hex specified RGB colors with no alpha channel.
- __hsl3RE__: Matches CSS3 'hsl(...) and hsla(...) deg and percent notation.
- __hslRE__: Matches CSS4 'hsl(...) and hsla(...) deg, grad, rad, turn and percent notation.
- __rgbaFuncRE__: Matches CSS3 'rgba(...) using '0...255 and percent (integer) notation.
- __rgbFuncRE__: Matches CSS1 'rgb(...) using '0...255 and percent (integer) notation.
- __rgbRE__: Matches CSS4 'rgb(...) and rgba(...) functios  using '0...255 and percent (float) notation.

### Contact info

- __emailEncodedOrNotRE__: Matche a valid email, URL encoded or not.
- __emailRE__: Matche a valid email.
- __usPhoneRE__: Matches US phone numbers with optional country code and area code.
- __zipCodeRE__: Matches 5 or 9 digit US zip codes.

### Identifiers

- __uuidRE__: Matches a UUID.

### JavaScript

- __jsReservedWordRE__: Matches a JS resereved word
- __jsVariableRE__: Matches a valid JS variable name

### NPM

- __npmPackageNameRE__: Matches an NPM package name. Provides matching groups 1 (org name, if any) and 2 (package basename).

### Numbers

- __floatRE__: Matches a float in either plan or scientific format.
- __plainFloatRE__: Matches a plain (non-scientific notation) float.
- __scientificFloatRE__: Matches a scientific notation float.

### Web

- __urlRE__: Matches a valid URL.

