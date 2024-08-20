# regex-repo
![coverage: 100%](./.readme-assets/coverage.svg) [![Unit tests](https://github.com/liquid-labs/regex-repo/actions/workflows/unit-tests-node.yaml/badge.svg)](https://github.com/liquid-labs/regex-repo/actions/workflows/unit-tests-node.yaml)

regex-repo is a collection of regular expressions. Refer to the [regex reference](#regex-reference) below for a list of the provided Res.

## Installation

```bash
npm i @liquid-labs/regex-repo
```

Supports both CJS and ESM packages.

## Usage

```javascript
import { emailRe } from '@liquid-labs/regex-repo' // ES6
// const { emailRe } = require('@liquid-labs/regex-repo') // cjs

const verified = emailRe.test(userInput)
```

## Regex reference

Each regular expression listed below is paired with an embeddable string named `xxxString`. E.g., `rgbRe` is paired with `rgbReString`. Each Re will only match strings that are the given type and nothing else. I.e., the Re begins with '^' and ends with '$'. The `xxxReString` can be used for partial matches, `matchAll`s, and used as part of larger expressions. E.g., to find all unique CSS RGB colors used in a style sheet, you might do something like:

```javascript
import { rgbReString } from '@liquid-labs/regex-repo'

const allColors = cssContent
  .matchAll(new RegExp(`[ :](${rgbReString})[; }]`, 'g'))
  .map((match) => match[1]) // extract the capture group
  .filter((v, i, arr) => i === arr.indexOf(v)) // filter non-unique items
  .sort()
```
_API generated with [dmd-readme-api](https://www.npmjs.com/package/dmd-readme-api)._

<span id="global-constant-index"></span>
- Constants:
  - <span id="global-constant-AWS-index"></span>_AWS_
    - [`awsS3BucketNameRe`](#awsS3BucketNameRe): Matches (most) valid S3 bucket name.
    - [`awsS3TaBucketNameRe`](#awsS3TaBucketNameRe): Matches (most) S3 Transfer Acceleration compatible S3 bucket name.
  - <span id="global-constant-Contacts-index"></span>_Contacts_
    - [`emailRe`](#emailRe): Match most valid emails.
    - [`usPhoneRe`](#usPhoneRe): Matches US phone numbers with optional country code and area code.
    - [`zipCodeRe`](#zipCodeRe): Matches 5 or 9 digit US zip codes.
  - <span id="global-constant-CSS-index"></span>_CSS_
    - [`cssColor3Re`](#cssColor3Re): Matches CSS3 'hex, rgb, rgba, hsl, and predefined colors.
    - [`cssColorRe`](#cssColorRe): Matches CSS4 'hex, rgb, rgba, hsl, and predefined colors.
    - [`cssPreColors1Re`](#cssPreColors1Re): Matches CSS1 predefined color names.
    - [`cssPreColors2Re`](#cssPreColors2Re): Matches CSS2 predefined color names.
    - [`cssPreColors3Re`](#cssPreColors3Re): Matches CSS3 predefined color names.
    - [`cssPreColorsRe`](#cssPreColorsRe): Matches CSS4 predefined color names.
    - [`hexColorAlphaRe`](#hexColorAlphaRe): Matches hex specified RGBA colors with an alpha channel.
    - [`hexColorNoAlphaRe`](#hexColorNoAlphaRe): Matches hex specified RGB colors with no alpha channel.
    - [`hsl3Re`](#hsl3Re): Matches CSS3 'hsl(...) and hsla(...) deg and percent notation.
    - [`hslRe`](#hslRe): Matches CSS4 'hsl(...) and hsla(...) deg, grad, rad, turn and percent notation.
    - [`rgbaFuncRe`](#rgbaFuncRe): Matches CSS3 'rgba(...) using '0...255 and percent (integer) notation.
    - [`rgbFuncRe`](#rgbFuncRe): Matches CSS1 'rgb(...) using '0...255 and percent (integer) notation.
    - [`rgbRe`](#rgbRe): Matches CSS4 'rgb(...) and rgba(...) functios using '0...255 and percent (float) notation.
  - <span id="global-constant-CSS-numbers-index"></span>_CSS numbers_
    - [`zeroTo100FloatPercentRe`](#zeroTo100FloatPercentRe): Matches a 0 to 100% float as used in CSS color specifications.
    - [`zeroTo100PercentRe`](#zeroTo100PercentRe): Matches a 0 to 100% integer as used in CSS color specifications.
    - [`zeroTo1FloatRe`](#zeroTo1FloatRe): Matches a 0 to 1 float as used in CSS color specifications.
    - [`zeroTo255FloatRe`](#zeroTo255FloatRe): Matches a 0 to 255 float as used in CSS color specifications.
    - [`zeroTo255Re`](#zeroTo255Re): Matches a 0 to 255 integer as used in CSS color specifications.
    - [`zeroTo360FloatRe`](#zeroTo360FloatRe): Matches a 0 to 360 float as used in CSS color specifications.
    - [`zeroTo360Re`](#zeroTo360Re): Matches a 0 to 360 integer as used in CSS color specifications.
  - <span id="global-constant-Date-time-index"></span>_Date time_
    - [`intlDateRe`](#intlDateRe): Matches an international style 'YYYY/MM/DD' string.
    - [`iso8601DateRe`](#iso8601DateRe): Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date time like '20240101T1212Z.
    - [`iso8601DateReString`](#iso8601DateReString): Matches the time designation portion of an ISO 8601 date+time.
    - [`iso8601DateTimeRe`](#iso8601DateTimeRe): Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) _requiring_ both date and time components.
    - [`iso8601DayReString`](#iso8601DayReString): An RE ready string that matches the day designation portion of an ISO 8601 date+time.
    - [`militaryTimeRe`](#militaryTimeRe): Matches military time style 'HHMM' string.
    - [`rfc2822DateRe`](#rfc2822DateRe): Matches an [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) style date like 'Mon, 6 Jan 1992 12:12 UTC'.
    - [`rfc2822DayReString`](#rfc2822DayReString): An RE ready string that matches the day designation portion of an RFC 2822 date+time.
    - [`rfc2822TimeReString`](#rfc2822TimeReString): An RE ready string that matches the time designation portion of an RFC 2822 date+time.
    - [`timeRe`](#timeRe): Matches a twelve hour time designation, requires AM or PM designation.
    - [`timezoneReString`](#timezoneReString): An RE ready string that matches a general timezone designation; compliant with RFC 2822 timezone portion.
    - [`twentyFourHourTimeRe`](#twentyFourHourTimeRe): Matches a twenty-four hour time designationAllows optional leading 0 in hour.
    - [`usDateRe`](#usDateRe): Matches a US style 'MM/DD/YYYY' string.
  - <span id="global-constant-Domain-names-index"></span>_Domain names_
    - [`domainLabelRe`](#domainLabelRe): Matches a non-tld domain label.
    - [`fqDomainNameRe`](#fqDomainNameRe): Matches fully qualified domain name (one or more subdomains + TLD).
    - [`localhostRe`](#localhostRe): Matches any representation of localhost; the special name, IPV4 loopbacks, or IPV6 loopbacks.
    - [`tldNameRe`](#tldNameRe): Matches a Top Level Domain (TLD).
  - <span id="global-constant-Identifiers-index"></span>_Identifiers_
    - [`einRe`](#einRe): Matches a valid EIN number.
    - [`ssnRe`](#ssnRe): Matches a valid SSN.
    - [`uuidRe`](#uuidRe): Matches a UUID.
  - <span id="global-constant-Javascript-index"></span>_Javascript_
    - [`jsReservedWordRe`](#jsReservedWordRe): Matches a JS resereved word.
    - [`jsVariableRe`](#jsVariableRe): Matches a valid JS variable name.
  - <span id="global-constant-Network-index"></span>_Network_
    - [`ipAddressRe`](#ipAddressRe): Matches a string in IP address format.
    - [`ipHostRe`](#ipHostRe): Matches a valid, non-localhost IP address.
    - [`ipV6Re`](#ipV6Re): Matches a string in IPV6 format.
    - [`ipVFutureRe`](#ipVFutureRe): Matches potential future IP protocols.
  - <span id="global-constant-NPM-index"></span>_NPM_
    - [`npmPackageNameRe`](#npmPackageNameRe): Matches an NPM package name.
  - <span id="global-constant-Numbers-index"></span>_Numbers_
    - [`floatRe`](#floatRe): Matches a float in either plan or scientific format.
    - [`integerRe`](#integerRe): Matches an integer.
    - [`plainFloatRe`](#plainFloatRe): Matches a plain (non-scientific notation) float.
    - [`scientificFloatRe`](#scientificFloatRe): Matches a scientific notation float.
  - <span id="global-constant-URL-index"></span>_URL_
    - [`commonUrlRe`](#commonUrlRe): Matches any of the "common" web URL types: 'mailto', 'http/https', 'ftp', and 'file'.
    - [`fileUrlRe`](#fileUrlRe): Matches a valid 'file' URL.
    - [`ftpUrlRe`](#ftpUrlRe): Matches a valid 'ftp' URL.
    - [`httpUrlRe`](#httpUrlRe): Matches a valid 'http/https' URL.
    - [`mailtoUrlRe`](#mailtoUrlRe): Matches a valid 'mailto:' URL.
    - [`urlRe`](#urlRe): Matches a valid, generic URL.

<a id="awsS3BucketNameRe"></a>
### `awsS3BucketNameRe` <sup>↱<sup>[source code](./src/aws.js#L36)</sup></sup> <sup>⇧<sup>[AWS index](#global-constant-AWS-index) | [global index](#global-constant-index)</sup></sup>

Matches (most) valid S3 bucket name. Note `awsS3BucketNameReString` cannot be used for partial matches. Does not
enforce 63 character limit.

<a id="awsS3TaBucketNameRe"></a>
### `awsS3TaBucketNameRe` <sup>↱<sup>[source code](./src/aws.js#L27)</sup></sup> <sup>⇧<sup>[AWS index](#global-constant-AWS-index) | [global index](#global-constant-index)</sup></sup>

Matches (most) S3 Transfer Acceleration compatible S3 bucket name. Note `awsS3TaBucketNameReString` cannot be used
for partial matches.

<a id="emailRe"></a>
### `emailRe` <sup>↱<sup>[source code](./src/contacts.js#L43)</sup></sup> <sup>⇧<sup>[Contacts index](#global-constant-Contacts-index) | [global index](#global-constant-index)</sup></sup>

Match most valid emails. Provides matching groups 1 (user name) and 2 (domain). When using the partial string to
create a Re, you must use the 'u' flag.

<a id="usPhoneRe"></a>
### `usPhoneRe` <sup>↱<sup>[source code](./src/contacts.js#L26)</sup></sup> <sup>⇧<sup>[Contacts index](#global-constant-Contacts-index) | [global index](#global-constant-index)</sup></sup>

Matches US phone numbers with optional country code and area code.

<a id="zipCodeRe"></a>
### `zipCodeRe` <sup>↱<sup>[source code](./src/contacts.js#L34)</sup></sup> <sup>⇧<sup>[Contacts index](#global-constant-Contacts-index) | [global index](#global-constant-index)</sup></sup>

Matches 5 or 9 digit US zip codes.

<a id="cssColor3Re"></a>
### `cssColor3Re` <sup>↱<sup>[source code](./src/css.js#L147)</sup></sup> <sup>⇧<sup>[CSS index](#global-constant-CSS-index) | [global index](#global-constant-index)</sup></sup>

Matches CSS3 'hex, rgb, rgba, hsl, and predefined colors.

<a id="cssColorRe"></a>
### `cssColorRe` <sup>↱<sup>[source code](./src/css.js#L159)</sup></sup> <sup>⇧<sup>[CSS index](#global-constant-CSS-index) | [global index](#global-constant-index)</sup></sup>

Matches CSS4 'hex, rgb, rgba, hsl, and predefined colors.

<a id="cssPreColors1Re"></a>
### `cssPreColors1Re` <sup>↱<sup>[source code](./src/css.js#L51)</sup></sup> <sup>⇧<sup>[CSS index](#global-constant-CSS-index) | [global index](#global-constant-index)</sup></sup>

Matches CSS1 predefined color names.

<a id="cssPreColors2Re"></a>
### `cssPreColors2Re` <sup>↱<sup>[source code](./src/css.js#L59)</sup></sup> <sup>⇧<sup>[CSS index](#global-constant-CSS-index) | [global index](#global-constant-index)</sup></sup>

Matches CSS2 predefined color names.

<a id="cssPreColors3Re"></a>
### `cssPreColors3Re` <sup>↱<sup>[source code](./src/css.js#L67)</sup></sup> <sup>⇧<sup>[CSS index](#global-constant-CSS-index) | [global index](#global-constant-index)</sup></sup>

Matches CSS3 predefined color names.

<a id="cssPreColorsRe"></a>
### `cssPreColorsRe` <sup>↱<sup>[source code](./src/css.js#L75)</sup></sup> <sup>⇧<sup>[CSS index](#global-constant-CSS-index) | [global index](#global-constant-index)</sup></sup>

Matches CSS4 predefined color names.

<a id="hexColorAlphaRe"></a>
### `hexColorAlphaRe` <sup>↱<sup>[source code](./src/css.js#L43)</sup></sup> <sup>⇧<sup>[CSS index](#global-constant-CSS-index) | [global index](#global-constant-index)</sup></sup>

Matches hex specified RGBA colors with an alpha channel.

<a id="hexColorNoAlphaRe"></a>
### `hexColorNoAlphaRe` <sup>↱<sup>[source code](./src/css.js#L34)</sup></sup> <sup>⇧<sup>[CSS index](#global-constant-CSS-index) | [global index](#global-constant-index)</sup></sup>

Matches hex specified RGB colors with no alpha channel.

<a id="hsl3Re"></a>
### `hsl3Re` <sup>↱<sup>[source code](./src/css.js#L125)</sup></sup> <sup>⇧<sup>[CSS index](#global-constant-CSS-index) | [global index](#global-constant-index)</sup></sup>

Matches CSS3 'hsl(...) and hsla(...) deg and percent notation.

<a id="hslRe"></a>
### `hslRe` <sup>↱<sup>[source code](./src/css.js#L134)</sup></sup> <sup>⇧<sup>[CSS index](#global-constant-CSS-index) | [global index](#global-constant-index)</sup></sup>

Matches CSS4 'hsl(...) and hsla(...) deg, grad, rad, turn and percent notation.

<a id="rgbaFuncRe"></a>
### `rgbaFuncRe` <sup>↱<sup>[source code](./src/css.js#L97)</sup></sup> <sup>⇧<sup>[CSS index](#global-constant-CSS-index) | [global index](#global-constant-index)</sup></sup>

Matches CSS3 'rgba(...) using '0...255 and percent (integer) notation.

<a id="rgbFuncRe"></a>
### `rgbFuncRe` <sup>↱<sup>[source code](./src/css.js#L89)</sup></sup> <sup>⇧<sup>[CSS index](#global-constant-CSS-index) | [global index](#global-constant-index)</sup></sup>

Matches CSS1 'rgb(...) using '0...255 and percent (integer) notation.

<a id="rgbRe"></a>
### `rgbRe` <sup>↱<sup>[source code](./src/css.js#L114)</sup></sup> <sup>⇧<sup>[CSS index](#global-constant-CSS-index) | [global index](#global-constant-index)</sup></sup>

Matches CSS4 'rgb(...) and rgba(...) functios  using '0...255 and percent (float) notation.

<a id="zeroTo100FloatPercentRe"></a>
### `zeroTo100FloatPercentRe` <sup>↱<sup>[source code](./src/numbers.js#L74)</sup></sup> <sup>⇧<sup>[CSS numbers index](#global-constant-CSS-numbers-index) | [global index](#global-constant-index)</sup></sup>

Matches a 0 to 100% float as used in CSS color specifications.

<a id="zeroTo100PercentRe"></a>
### `zeroTo100PercentRe` <sup>↱<sup>[source code](./src/numbers.js#L66)</sup></sup> <sup>⇧<sup>[CSS numbers index](#global-constant-CSS-numbers-index) | [global index](#global-constant-index)</sup></sup>

Matches a 0 to 100% integer as used in CSS color specifications.

<a id="zeroTo1FloatRe"></a>
### `zeroTo1FloatRe` <sup>↱<sup>[source code](./src/numbers.js#L58)</sup></sup> <sup>⇧<sup>[CSS numbers index](#global-constant-CSS-numbers-index) | [global index](#global-constant-index)</sup></sup>

Matches a 0 to 1 float as used in CSS color specifications.

<a id="zeroTo255FloatRe"></a>
### `zeroTo255FloatRe` <sup>↱<sup>[source code](./src/numbers.js#L90)</sup></sup> <sup>⇧<sup>[CSS numbers index](#global-constant-CSS-numbers-index) | [global index](#global-constant-index)</sup></sup>

Matches a 0 to 255 float as used in CSS color specifications.

<a id="zeroTo255Re"></a>
### `zeroTo255Re` <sup>↱<sup>[source code](./src/numbers.js#L82)</sup></sup> <sup>⇧<sup>[CSS numbers index](#global-constant-CSS-numbers-index) | [global index](#global-constant-index)</sup></sup>

Matches a 0 to 255 integer as used in CSS color specifications.

<a id="zeroTo360FloatRe"></a>
### `zeroTo360FloatRe` <sup>↱<sup>[source code](./src/numbers.js#L106)</sup></sup> <sup>⇧<sup>[CSS numbers index](#global-constant-CSS-numbers-index) | [global index](#global-constant-index)</sup></sup>

Matches a 0 to 360 float as used in CSS color specifications.

<a id="zeroTo360Re"></a>
### `zeroTo360Re` <sup>↱<sup>[source code](./src/numbers.js#L98)</sup></sup> <sup>⇧<sup>[CSS numbers index](#global-constant-CSS-numbers-index) | [global index](#global-constant-index)</sup></sup>

Matches a 0 to 360 integer as used in CSS color specifications.

<a id="intlDateRe"></a>
### `intlDateRe` <sup>↱<sup>[source code](./src/date-times.mjs#L114)</sup></sup> <sup>⇧<sup>[Date time index](#global-constant-Date-time-index) | [global index](#global-constant-index)</sup></sup>

Matches an international style 'YYYY/MM/DD' string. Accepts separators '.', '/', '-'. Will except 1 or 2 digits for
month and day and 1-4 digits for the year. Also accepts a + or - before the year. Provides capture groups 1 (BCE/CE
indicator), 2 (year), 3 (month), 4 (day).

<a id="iso8601DateRe"></a>
### `iso8601DateRe` <sup>↱<sup>[source code](./src/date-times.mjs#L52)</sup></sup> <sup>⇧<sup>[Date time index](#global-constant-Date-time-index) | [global index](#global-constant-index)</sup></sup>

Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date time like '20240101T1212Z. Provides matching
groups 1 (year), 3 (month), and 4 (day of month), 5 (week of year), 6 (day of week date), and 7 (ordinal or Julian
date), 8 (special end of day time), 10 (hour), 11 (decimal fraction of hour), 13 (minute), 14 (decimal fraction of
minute), 15 (seconds), 16 (decimal fraction of a second), and 17 (timezone designation). (Groups 2, 11, and 13 are
internal back references.)

<a id="iso8601DateReString"></a>
### `iso8601DateReString` <sup>↱<sup>[source code](./src/date-times.mjs#L42)</sup></sup> <sup>⇧<sup>[Date time index](#global-constant-Date-time-index) | [global index](#global-constant-index)</sup></sup>

Matches the time designation portion of an ISO 8601 date+time. Provides matching groups 1 (special end of day time),
3 (hours), 3 (fraction of hour), 5 (minutes), 6 (fraction of minute), 7 (seconds), and 8 (fraction of seconds).

<a id="iso8601DateTimeRe"></a>
### `iso8601DateTimeRe` <sup>↱<sup>[source code](./src/date-times.mjs#L61)</sup></sup> <sup>⇧<sup>[Date time index](#global-constant-Date-time-index) | [global index](#global-constant-index)</sup></sup>

Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) _requiring_ both date and time components. See
[iso8601DateRe](#iso8601DateRe) for matching groups.

<a id="iso8601DayReString"></a>
### `iso8601DayReString` <sup>↱<sup>[source code](./src/date-times.mjs#L26)</sup></sup> <sup>⇧<sup>[Date time index](#global-constant-Date-time-index) | [global index](#global-constant-index)</sup></sup>

An RE ready string that matches the day designation portion of an ISO 8601 date+time. Provides matching groups 1 (
year), 3 (month), and 4 (day of month), 5 (week of year), 6 (day of week date), and 7 (ordinal or Julian date).

<a id="militaryTimeRe"></a>
### `militaryTimeRe` <sup>↱<sup>[source code](./src/date-times.mjs#L122)</sup></sup> <sup>⇧<sup>[Date time index](#global-constant-Date-time-index) | [global index](#global-constant-index)</sup></sup>

Matches military time style 'HHMM' string. Provides capture groups 1 (special 2400 time), 2 (hour), and 3 (minutes).

<a id="rfc2822DateRe"></a>
### `rfc2822DateRe` <sup>↱<sup>[source code](./src/date-times.mjs#L92)</sup></sup> <sup>⇧<sup>[Date time index](#global-constant-Date-time-index) | [global index](#global-constant-index)</sup></sup>

Matches an [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) style date like 'Mon, 6 Jan 1992
12:12 UTC'. Provides matching groups 1 (day of week), 2 (day of month), 3 (month name), and 4 (year), 5 (hour), 6
(min), 7 (second), and 8 (time zone).

<a id="rfc2822DayReString"></a>
### `rfc2822DayReString` <sup>↱<sup>[source code](./src/date-times.mjs#L68)</sup></sup> <sup>⇧<sup>[Date time index](#global-constant-Date-time-index) | [global index](#global-constant-index)</sup></sup>

An RE ready string that matches the day designation portion of an RFC 2822 date+time. Provides matching groups 1
(day of week name), 2 (day of month), 3 (month name), 4 (year).

<a id="rfc2822TimeReString"></a>
### `rfc2822TimeReString` <sup>↱<sup>[source code](./src/date-times.mjs#L82)</sup></sup> <sup>⇧<sup>[Date time index](#global-constant-Date-time-index) | [global index](#global-constant-index)</sup></sup>

An RE ready string that matches the time designation portion of an RFC 2822 date+time. Provides matching groups 1
(hour), 2 (minutes), 3 (seconds), and 4 (timezone).

<a id="timeRe"></a>
### `timeRe` <sup>↱<sup>[source code](./src/date-times.mjs#L132)</sup></sup> <sup>⇧<sup>[Date time index](#global-constant-Date-time-index) | [global index](#global-constant-index)</sup></sup>

Matches a twelve hour time designation, requires AM or PM designation. Allows optional leading 0 in hour. Provides
matching groups 1 (hour), 2 (minutes), 3 (seconds, without decimal fractions), 4 (decimal fraction seconds), and 5 (
AM/PM indicator).

<a id="timezoneReString"></a>
### `timezoneReString` <sup>↱<sup>[source code](./src/date-times.mjs#L75)</sup></sup> <sup>⇧<sup>[Date time index](#global-constant-Date-time-index) | [global index](#global-constant-index)</sup></sup>

An RE ready string that matches a general timezone designation; compliant with RFC 2822 timezone portion. Provides
matching groups 1 (timezone).

<a id="twentyFourHourTimeRe"></a>
### `twentyFourHourTimeRe` <sup>↱<sup>[source code](./src/date-times.mjs#L142)</sup></sup> <sup>⇧<sup>[Date time index](#global-constant-Date-time-index) | [global index](#global-constant-index)</sup></sup>

Matches a twenty-four hour time designationAllows optional leading 0 in hour. Provides matching groups 1 (special
24:00 designation with optional seconds), 2 (hour), 3 (minutes), 4 (seconds, without decimal fractions), 5 (decimal
fraction seconds).

<a id="usDateRe"></a>
### `usDateRe` <sup>↱<sup>[source code](./src/date-times.mjs#L104)</sup></sup> <sup>⇧<sup>[Date time index](#global-constant-Date-time-index) | [global index](#global-constant-index)</sup></sup>

Matches a US style 'MM/DD/YYYY' string. Accepts separators '.', '/', '-'. Will except 1 or 2 digits for month and
day and 1-4 digits for the year. Also accepts a + or - before the year. Provides capture groups 1 (month), 2 (day of
month), 3 (BCE/CE indicator), and 4 (year).

<a id="domainLabelRe"></a>
### `domainLabelRe` <sup>↱<sup>[source code](./src/domain-name.mjs#L48)</sup></sup> <sup>⇧<sup>[Domain names index](#global-constant-Domain-names-index) | [global index](#global-constant-index)</sup></sup>

Matches a non-tld domain label. Enforces the 63 byte domain label limit for non-international (all ASCII) labels.
See [domain name rules](#domain-name-rules). When using the partial string to create a Re, you must use the 'u' or
'v' flag.

<a id="fqDomainNameRe"></a>
### `fqDomainNameRe` <sup>↱<sup>[source code](./src/domain-name.mjs#L59)</sup></sup> <sup>⇧<sup>[Domain names index](#global-constant-Domain-names-index) | [global index](#global-constant-index)</sup></sup>

Matches fully qualified domain name (one or more subdomains + TLD). Partially enforces the 255 byte FQ domain name
limit, but this is only valid for non-international (all ASCII) domain names because we can only count characters.
When using the partial string to create a Re, you must use the 'u' or 'v' flag.

<a id="localhostRe"></a>
### `localhostRe` <sup>↱<sup>[source code](./src/domain-name.mjs#L26)</sup></sup> <sup>⇧<sup>[Domain names index](#global-constant-Domain-names-index) | [global index](#global-constant-index)</sup></sup>

Matches any representation of localhost; the special name, IPV4 loopbacks, or IPV6 loopbacks.

<a id="tldNameRe"></a>
### `tldNameRe` <sup>↱<sup>[source code](./src/domain-name.mjs#L36)</sup></sup> <sup>⇧<sup>[Domain names index](#global-constant-Domain-names-index) | [global index](#global-constant-index)</sup></sup>

Matches a Top Level Domain (TLD). See [domain name rules](#domain-name-rules). When using the partial string to
create a Re, you must use the 'u' or 'v' flag.

<a id="einRe"></a>
### `einRe` <sup>↱<sup>[source code](./src/ids.js#L45)</sup></sup> <sup>⇧<sup>[Identifiers index](#global-constant-Identifiers-index) | [global index](#global-constant-index)</sup></sup>

Matches a valid EIN number.

<a id="ssnRe"></a>
### `ssnRe` <sup>↱<sup>[source code](./src/ids.js#L34)</sup></sup> <sup>⇧<sup>[Identifiers index](#global-constant-Identifiers-index) | [global index](#global-constant-index)</sup></sup>

Matches a valid SSN. Provides 3 matching groups, 1 (area number), 2
(group number), and 3 (serial number).

<a id="uuidRe"></a>
### `uuidRe` <sup>↱<sup>[source code](./src/ids.js#L25)</sup></sup> <sup>⇧<sup>[Identifiers index](#global-constant-Identifiers-index) | [global index](#global-constant-index)</sup></sup>

Matches a UUID.

<a id="jsReservedWordRe"></a>
### `jsReservedWordRe` <sup>↱<sup>[source code](./src/javascript.js#L25)</sup></sup> <sup>⇧<sup>[Javascript index](#global-constant-Javascript-index) | [global index](#global-constant-index)</sup></sup>

Matches a JS resereved word.

<a id="jsVariableRe"></a>
### `jsVariableRe` <sup>↱<sup>[source code](./src/javascript.js#L34)</sup></sup> <sup>⇧<sup>[Javascript index](#global-constant-Javascript-index) | [global index](#global-constant-index)</sup></sup>

Matches a valid JS variable name.

<a id="ipAddressRe"></a>
### `ipAddressRe` <sup>↱<sup>[source code](./src/network.mjs#L41)</sup></sup> <sup>⇧<sup>[Network index](#global-constant-Network-index) | [global index](#global-constant-index)</sup></sup>

Matches a string in IP address format. Use 'ipHostRe' to match actually valid IP addresses.

<a id="ipHostRe"></a>
### `ipHostRe` <sup>↱<sup>[source code](./src/network.mjs#L31)</sup></sup> <sup>⇧<sup>[Network index](#global-constant-Network-index) | [global index](#global-constant-index)</sup></sup>

Matches a valid, non-localhost IP address.

<a id="ipV6Re"></a>
### `ipV6Re` <sup>↱<sup>[source code](./src/network.mjs#L69)</sup></sup> <sup>⇧<sup>[Network index](#global-constant-Network-index) | [global index](#global-constant-index)</sup></sup>

Matches a string in IPV6 format.

<a id="ipVFutureRe"></a>
### `ipVFutureRe` <sup>↱<sup>[source code](./src/network.mjs#L77)</sup></sup> <sup>⇧<sup>[Network index](#global-constant-Network-index) | [global index](#global-constant-index)</sup></sup>

Matches potential future IP protocols.

<a id="npmPackageNameRe"></a>
### `npmPackageNameRe` <sup>↱<sup>[source code](./src/npm.js#L26)</sup></sup> <sup>⇧<sup>[NPM index](#global-constant-NPM-index) | [global index](#global-constant-index)</sup></sup>

Matches an NPM package name. Provides matching groups 1 (org name,
if any) and 2 (package basename).

<a id="floatRe"></a>
### `floatRe` <sup>↱<sup>[source code](./src/numbers.js#L50)</sup></sup> <sup>⇧<sup>[Numbers index](#global-constant-Numbers-index) | [global index](#global-constant-index)</sup></sup>

Matches a float in either plan or scientific format.

<a id="integerRe"></a>
### `integerRe` <sup>↱<sup>[source code](./src/numbers.js#L26)</sup></sup> <sup>⇧<sup>[Numbers index](#global-constant-Numbers-index) | [global index](#global-constant-index)</sup></sup>

Matches an integer.

<a id="plainFloatRe"></a>
### `plainFloatRe` <sup>↱<sup>[source code](./src/numbers.js#L34)</sup></sup> <sup>⇧<sup>[Numbers index](#global-constant-Numbers-index) | [global index](#global-constant-index)</sup></sup>

Matches a plain (non-scientific notation) float.

<a id="scientificFloatRe"></a>
### `scientificFloatRe` <sup>↱<sup>[source code](./src/numbers.js#L42)</sup></sup> <sup>⇧<sup>[Numbers index](#global-constant-Numbers-index) | [global index](#global-constant-index)</sup></sup>

Matches a scientific notation float.

<a id="commonUrlRe"></a>
### `commonUrlRe` <sup>↱<sup>[source code](./src/url.mjs#L86)</sup></sup> <sup>⇧<sup>[URL index](#global-constant-URL-index) | [global index](#global-constant-index)</sup></sup>

Matches any of the "common" web URL types: 'mailto', 'http/https', 'ftp', and 'file'. You must use the either the
'u' or 'v' flag when using the Re string.

<a id="fileUrlRe"></a>
### `fileUrlRe` <sup>↱<sup>[source code](./src/url.mjs#L77)</sup></sup> <sup>⇧<sup>[URL index](#global-constant-URL-index) | [global index](#global-constant-index)</sup></sup>

Matches a valid 'file' URL. Provides capture groups 1 (host), 2 (port), 3 (path). You must use the either the 'u' or
'v' flag when using the Re string.

<a id="ftpUrlRe"></a>
### `ftpUrlRe` <sup>↱<sup>[source code](./src/url.mjs#L68)</sup></sup> <sup>⇧<sup>[URL index](#global-constant-URL-index) | [global index](#global-constant-index)</sup></sup>

Matches a valid 'ftp' URL. Provides capture groups 1 (username), 2 (user password), 3 (host or IP), 4 (port), 5
(path). You must use the either the 'u' or 'v' flag when using the Re string.

<a id="httpUrlRe"></a>
### `httpUrlRe` <sup>↱<sup>[source code](./src/url.mjs#L59)</sup></sup> <sup>⇧<sup>[URL index](#global-constant-URL-index) | [global index](#global-constant-index)</sup></sup>

Matches a valid 'http/https' URL. Provides capture groups 1 (protocol), 2 (username), 3 (user password), 4 (host or
IP), 5 (port), 6 (path), 7 (query string), and 8 (fragment). You must use the either the 'u' or 'v' flag when using
the Re string.

<a id="mailtoUrlRe"></a>
### `mailtoUrlRe` <sup>↱<sup>[source code](./src/url.mjs#L40)</sup></sup> <sup>⇧<sup>[URL index](#global-constant-URL-index) | [global index](#global-constant-index)</sup></sup>

Matches a valid 'mailto:' URL. Provides a single capture group, 1 (email address).' You must use the either the 'u'
or 'v' flag when using the Re string.

<a id="urlRe"></a>
### `urlRe` <sup>↱<sup>[source code](./src/url.mjs#L31)</sup></sup> <sup>⇧<sup>[URL index](#global-constant-URL-index) | [global index](#global-constant-index)</sup></sup>

Matches a valid, generic URL. Provides capture groups 1 (schema), 2 (server/authority), 3 (path), 4 (query part), 5 (
intra-page link/fragment.) Note, a URL always has scheme, and at a minimum a server/authority or path, and may have
both. The query and fragment components are always optional. For general usage, you might want to use the more
specific Res for specific protocols or the `commonUrlRe`.

## Domain name rules

Unfortunately, there isn't clear consensus on what is allowed in a subdomain vs a top level domain (TLD); referred to collectively as 'domain labels'. So, here are the rules we follow:

* Domain labels may no more than 63 bytes in length.
* Labels are composed of alpha-numeric characters (a-z, 0-9, and any non-ASCII Unicode character) and hyphens ('-'), except:
  * the label may not begin or end with a hyphen,
  * may not consist of a single digit,
  * the label must not have consecutive hyphens in the 3rd and 4th position. E.g. 'xy--z' is invalid.[^1]
* TLDs must be at least two bytes (two ASCII characters or a single Unicode character) and may not be composed only of digits.
* A fully qualified domain is limited to 255 bytes in total.

[^1]: The DNS protocol only allows a-z, 0-9, and '-' in domain labels. International domains are encoded as special 'xn--' domains. E.g., 'कॉम"' is encoded as 'xn--11b4c3d'. This is why hyphens in the third and fourth position are restricted. So, while 'xn--11b4c3d' is a valid domain, you can't register such domains directly. You would register the international domain and it's translated to an 'xn--' domain in the background.
  
