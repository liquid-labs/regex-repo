# regex-repo
[![coverage: 100%](./.readme-assets/coverage.svg)](https://google.com) [![Unit tests](https://github.com/liquid-labs/regex-repo/actions/workflows/unit-tests-node.yaml/badge.svg)](https://github.com/liquid-labs/regex-repo/actions/workflows/unit-tests-node.yaml)

regex-repo is a collection of regular expressions. Refer to the [regex reference](#regex-reference) below for a list of the provided REs.

## Installation

```bash
npm i @liquid-labs/regex-repo
```

## Usage

```javascript
import { emailRE } from '@liquid-labs/regex-repo' // ES6
// const { emailRE } = require('@liquid-labs/regex-repo') // cjs

const verified = emailRE.test(userInput)
```

## Regex reference

Each regular expression listed below is paired with an embeddable string named `xxxString`. E.g., `rgbRE` is paired with `rgbREString`. Each RE will only match strings that are the given type and nothing else. I.e., the RE begins with '^' and ends with '$'. The `xxxREString` can be used for partial matches, `matchAll`s, and used as part of larger expressions. E.g., to find all unique CSS RGB colors used in a style sheet, you might do something like:

```javascript
import { rgbREString } from '@liquid-labs/regex-repo'

const allColors = cssContent
  .matchAll(new RegExp(`[ :](${rgbREString})[; }]`, 'g'))
  .map((match) => match[1]) // extract the capture group
  .filter((v, i, arr) => i === arr.indexOf(v)) // filter non-unique items
  .sort()
```

### AWS

- __awsS3BucketNameRE__: Matches valid S3 bucket name. Note `awsS3BucketNameREString` cannot be used for partial matches.
- __awsS3TABucketNameRE__: Matches S3 Transfer Acceleration compatible S3 bucket name. Note `awsS3TABucketNameREString` cannot be used for partial matches.

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

- __emailRE__: Match a valid email. Provides matching groups 1 (user name) and 2 (domain).
- __usPhoneRE__: Matches US phone numbers with optional country code and area code.
- __zipCodeRE__: Matches 5 or 9 digit US zip codes.

### Identifiers

- __uuidRE__: Matches a UUID.

### JavaScript

- __jsReservedWordRE__: Matches a JS resereved word.
- __jsVariableRE__: Matches a valid JS variable name.

### NPM

- __npmPackageNameRE__: Matches an NPM package name. Provides matching groups 1 (org name, if any) and 2 (package basename).

### Numbers

- __floatRE__: Matches a float in either plan or scientific format.
- __plainFloatRE__: Matches a plain (non-scientific notation) float.
- __scientificFloatRE__: Matches a scientific notation float.

### Web

- __domainNameRE__: Matches a (non-top level) domain name. Does not enforce 63 character limit.
- __fqDomainNameRE__: Matches fully qualified domain name (on or more sub-domain + TLD). Does not enforce 63 character sub-domain or 255 character FQN domain limit.
- __tldNameRE__: Matches a Top Level Domain (TLD)
- __urlRE__: Matches a valid URL.

