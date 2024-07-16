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

- <span id="awss3bucketnamere">__`awsS3BucketNameRE`__</span>: Matches (most) valid S3 bucket name. Note `awsS3BucketNameREString` cannot be used for partial matches. Does not enforce 63 character limit.
- <span id="awss3tabucketnamere">__`awsS3TABucketNameRE`__</span>: Matches (most) S3 Transfer Acceleration compatible S3 bucket name. Note `awsS3TABucketNameREString` cannot be used for partial matches.

### CSS numbers

- <span id="zeroto100floatpercentre">__`zeroTo100FloatPercentRE`__</span>: Matches a 0 to 100% float as used in CSS color specifications.
- <span id="zeroto100percentre">__`zeroTo100PercentRE`__</span>: Matches a 0 to 100% integer as used in CSS color specifications.
- <span id="zeroto1floatre">__`zeroTo1FloatRE`__</span>: Matches a 0 to 1 float as used in CSS color specifications.
- <span id="zeroto255floatre">__`zeroTo255FloatRE`__</span>: Matches a 0 to 255 float as used in CSS color specifications.
- <span id="zeroto255re">__`zeroTo255RE`__</span>: Matches a 0 to 255 integer as used in CSS color specifications.
- <span id="zeroto360floatre">__`zeroTo360FloatRE`__</span>: Matches a 0 to 360 float as used in CSS color specifications.
- <span id="zeroto360re">__`zeroTo360RE`__</span>: Matches a 0 to 360 integer as used in CSS color specifications.

### Colors/CSS

- <span id="csscolor3re">__`cssColor3RE`__</span>: Matches CSS3 'hex, rgb, rgba, hsl, and predefined colors.
- <span id="csscolorre">__`cssColorRE`__</span>: Matches CSS4 'hex, rgb, rgba, hsl, and predefined colors.
- <span id="cssprecolors1re">__`cssPreColors1RE`__</span>: Matches CSS1 predefined color names.
- <span id="cssprecolors2re">__`cssPreColors2RE`__</span>: Matches CSS2 predefined color names.
- <span id="cssprecolors3re">__`cssPreColors3RE`__</span>: Matches CSS3 predefined color names.
- <span id="cssprecolorsre">__`cssPreColorsRE`__</span>: Matches CSS4 predefined color names.
- <span id="hexcoloralphare">__`hexColorAlphaRE`__</span>: Matches hex specified RGBA colors with an alpha channel.
- <span id="hexcolornoalphare">__`hexColorNoAlphaRE`__</span>: Matches hex specified RGB colors with no alpha channel.
- <span id="hsl3re">__`hsl3RE`__</span>: Matches CSS3 'hsl(...) and hsla(...) deg and percent notation.
- <span id="hslre">__`hslRE`__</span>: Matches CSS4 'hsl(...) and hsla(...) deg, grad, rad, turn and percent notation.
- <span id="rgbafuncre">__`rgbaFuncRE`__</span>: Matches CSS3 'rgba(...) using '0...255 and percent (integer) notation.
- <span id="rgbfuncre">__`rgbFuncRE`__</span>: Matches CSS1 'rgb(...) using '0...255 and percent (integer) notation.
- <span id="rgbre">__`rgbRE`__</span>: Matches CSS4 'rgb(...) and rgba(...) functios  using '0...255 and percent (float) notation.

### Contact info

- <span id="emailre">__`emailRE`__</span>: Match a valid email. Provides matching groups 1 (user name) and 2 (domain).
- <span id="usphonere">__`usPhoneRE`__</span>: Matches US phone numbers with optional country code and area code.
- <span id="zipcodere">__`zipCodeRE`__</span>: Matches 5 or 9 digit US zip codes.

### Date/Time

- <span id="intldatere">__`intlDateRE`__</span>: Matches an international style 'YYYY/MM/DD' string. Accepts separators '.', '/', '-'. Will except 1 or 2 digits for month and day and 1-4 digits for the year. Also accepts a + or - before the year. Provides capture groups 1 (BCE/CE indicator), 2 (year), 3 (month), 4 (day).
- <span id="iso8601datere">__`iso8601DateRE`__</span>: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date time like '20240101T1212Z. Provides matching groups 1 (year), 3 (month), and 4 (day of month), 5 (week date), 6 (day of week date), and 7 (ordinal or Julian date), 8 (special instant end of day time), 10 (hour), 11 (decimal fraction of hour), 13 (minute), 14 (decimal fraction of minute), 15 (seconds), 16 (decimal fraction of a second), and 17 (timezone designation). (Groups 2, 11, and 13 are internal back references.)
- <span id="iso8601datetimere">__`iso8601DateTimeRE`__</span>: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) _requiring_ both date and time components. See [`iso8601DateRE`](#iso8601datere) for matching groups.
- <span id="militarytimere">__`militaryTimeRE`__</span>: Matches military time style 'HHMM' string. Provides capture groups 1 (special 2400 time), 2 (hour), and 3 (minutes).
- <span id="timere">__`timeRE`__</span>: Matches a twelve hour time designation, requires AM or PM designation. Allows optional leading 0 in hour. Provides matching groups 1 (hour), 2 (minutes), 3 (seconds, without decimal fractions), 4 (decimal fraction seconds), and 5 (AM/PM indicator).
- <span id="twentyfourhourtimere">__`twentyFourHourTimeRE`__</span>: Matches a twenty-four hour time designationAllows optional leading 0 in hour. Provides matching groups 1 (special 24:00 designation with optional seconds), 2 (hour), 3 (minutes), 4 (seconds, without decimal fractions), 5 (decimal fraction seconds).
- <span id="usdatere">__`usDateRE`__</span>: Matches a US style 'MM/DD/YYYY' string. Accepts separators '.', '/', '-'. Will except 1 or 2 digits for month and day and 1-4 digits for the year. Also accepts a + or - before the year. Provides capture groups 1 (month), 2 (day of month), 3 (BCE/CE indicator), and 4 (year).

### Date/Tmie

- <span id="rfc2822datere">__`rfc2822DateRE`__</span>: Matches an [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) style date like 'Mon, 6 Jan 1992 12:12 UTC'. Provides matching groups 1 (day of week), 2 (day of month), 3 (month), and 4 (year), 5 (hour), 6 (min), 7 (second), and 8 (time zone).

### Identifiers

- <span id="uuidre">__`uuidRE`__</span>: Matches a UUID.

### JavaScript

- <span id="jsreservedwordre">__`jsReservedWordRE`__</span>: Matches a JS resereved word.
- <span id="jsvariablere">__`jsVariableRE`__</span>: Matches a valid JS variable name.

### NPM

- <span id="npmpackagenamere">__`npmPackageNameRE`__</span>: Matches an NPM package name. Provides matching groups 1 (org name, if any) and 2 (package basename).

### Numbers

- <span id="floatre">__`floatRE`__</span>: Matches a float in either plan or scientific format.
- <span id="integerre">__`integerRE`__</span>: Matches an integer.
- <span id="plainfloatre">__`plainFloatRE`__</span>: Matches a plain (non-scientific notation) float.
- <span id="scientificfloatre">__`scientificFloatRE`__</span>: Matches a scientific notation float.

### Web

- <span id="domainnamere">__`domainNameRE`__</span>: Matches a registerable domain name. See [domain name rules](#domain-name-rules).
- <span id="fqdomainnamere">__`fqDomainNameRE`__</span>: Matches fully qualified domain name (zero or more sub-domains + registerable domain + TLD). Does not enforce 63 character domain label limit or 255 character FQN domain limit.
- <span id="ipformatre">__`ipFormatRE`__</span>: Matches a string in IP address format. Use 'ipRE' to match actually valid IP addresses.
- <span id="ipre">__`ipRE`__</span>: Matches a valid, non-localhost IP address.
- <span id="subdomainre">__`subDomainRE`__</span>: Matches a valid sub-domain label. See [domain name rules](#domain-name-rules).
- <span id="tldnamere">__`tldNameRE`__</span>: Matches a Top Level Domain (TLD). See [domain name rules](#domain-name-rules).
- <span id="urlre">__`urlRE`__</span>: Matches a valid URL.

## Domain name rules

Unfortunately, there isn't clear consensus on what is allowed in a subdomain vs a registerable domain vs a top level domain (TLD); referred to collectively as 'domain labels'. So, here are the rules we follow:

* All domain labels must be at least 2 and no more than 63 characters in length. The 63 character limit is __not__ enforced by registerable and sub-domain REs.
* TLDs may only contain alpha characters (a-z).
* Registerable domains:
  * must begin with an alpha-numeric character (a-z, 0-9).
  * may have consecutive hyphens except in the 3rd and 4th position. E.g. 'xy--z' is invalid.
* Sub-domains:
  * must begin with an alpha-numeric character (a-z, 0-9).
  * may have consecutive hyphens anywhere.

Also note, the base domain label REs do not support International Domain Names (IDNs; also called 'special character domain names').