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
    - [`hsl3Re`](#hsl3Re): Matches CSS3 'hsl(.
    - [`hslRe`](#hslRe): Matches CSS4 'hsl(.
    - [`rgbaFuncRe`](#rgbaFuncRe): Matches CSS3 'rgba(.
    - [`rgbFuncRe`](#rgbFuncRe): Matches CSS1 'rgb(.
    - [`rgbRe`](#rgbRe): Matches CSS4 'rgb(.
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
    - [`iso8601DateRe`](#iso8601DateRe): Matches an [ISO 8601](https://en.
    - [`iso8601DateReString`](#iso8601DateReString): Matches the time designation portion of an ISO 8601 date+time.
    - [`iso8601DateTimeRe`](#iso8601DateTimeRe): Matches an [ISO 8601](https://en.
    - [`iso8601DayReString`](#iso8601DayReString): An RE ready string that matches the day designation portion of an ISO 8601 date+time.
    - [`militaryTimeRe`](#militaryTimeRe): Matches military time style 'HHMM' string.
    - [`rfc2822DateRe`](#rfc2822DateRe): Matches an [RFC 2822](https://datatracker.
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
### `awsS3BucketNameRe`

Matches (most) valid S3 bucket name. Note `awsS3BucketNameReString` cannot be used for partial matches. Does not 
enforce 63 character limit.

<subscript>[source code](./src/aws.js#L34); [global index](#global-constant-index), [AWS index](#global-constant-AWS-index)</subscript>

<a id="awsS3TaBucketNameRe"></a>
### `awsS3TaBucketNameRe`

Matches (most) S3 Transfer Acceleration compatible S3 bucket name. Note `awsS3TaBucketNameReString` cannot be used 
for partial matches.

<subscript>[source code](./src/aws.js#L26); [global index](#global-constant-index), [AWS index](#global-constant-AWS-index)</subscript>

<a id="emailRe"></a>
### `emailRe`

Match most valid emails. Provides matching groups 1 (user name) and 2 (domain). When using the partial string to 
create a Re, you must use the 'u' flag.

<subscript>[source code](./src/contacts.js#L40); [global index](#global-constant-index), [Contacts index](#global-constant-Contacts-index)</subscript>

<a id="usPhoneRe"></a>
### `usPhoneRe`

Matches US phone numbers with optional country code and area code.

<subscript>[source code](./src/contacts.js#L25); [global index](#global-constant-index), [Contacts index](#global-constant-Contacts-index)</subscript>

<a id="zipCodeRe"></a>
### `zipCodeRe`

Matches 5 or 9 digit US zip codes.

<subscript>[source code](./src/contacts.js#L32); [global index](#global-constant-index), [Contacts index](#global-constant-Contacts-index)</subscript>

<a id="cssColor3Re"></a>
### `cssColor3Re`

Matches CSS3 'hex, rgb, rgba, hsl, and predefined colors.

<subscript>[source code](./src/css.js#L135); [global index](#global-constant-index), [CSS index](#global-constant-CSS-index)</subscript>

<a id="cssColorRe"></a>
### `cssColorRe`

Matches CSS4 'hex, rgb, rgba, hsl, and predefined colors.

<subscript>[source code](./src/css.js#L146); [global index](#global-constant-index), [CSS index](#global-constant-CSS-index)</subscript>

<a id="cssPreColors1Re"></a>
### `cssPreColors1Re`

Matches CSS1 predefined color names.

<subscript>[source code](./src/css.js#L48); [global index](#global-constant-index), [CSS index](#global-constant-CSS-index)</subscript>

<a id="cssPreColors2Re"></a>
### `cssPreColors2Re`

Matches CSS2 predefined color names.

<subscript>[source code](./src/css.js#L55); [global index](#global-constant-index), [CSS index](#global-constant-CSS-index)</subscript>

<a id="cssPreColors3Re"></a>
### `cssPreColors3Re`

Matches CSS3 predefined color names.

<subscript>[source code](./src/css.js#L62); [global index](#global-constant-index), [CSS index](#global-constant-CSS-index)</subscript>

<a id="cssPreColorsRe"></a>
### `cssPreColorsRe`

Matches CSS4 predefined color names.

<subscript>[source code](./src/css.js#L69); [global index](#global-constant-index), [CSS index](#global-constant-CSS-index)</subscript>

<a id="hexColorAlphaRe"></a>
### `hexColorAlphaRe`

Matches hex specified RGBA colors with an alpha channel.

<subscript>[source code](./src/css.js#L41); [global index](#global-constant-index), [CSS index](#global-constant-CSS-index)</subscript>

<a id="hexColorNoAlphaRe"></a>
### `hexColorNoAlphaRe`

Matches hex specified RGB colors with no alpha channel.

<subscript>[source code](./src/css.js#L33); [global index](#global-constant-index), [CSS index](#global-constant-CSS-index)</subscript>

<a id="hsl3Re"></a>
### `hsl3Re`

Matches CSS3 'hsl(...) and hsla(...) deg and percent notation.

<subscript>[source code](./src/css.js#L115); [global index](#global-constant-index), [CSS index](#global-constant-CSS-index)</subscript>

<a id="hslRe"></a>
### `hslRe`

Matches CSS4 'hsl(...) and hsla(...) deg, grad, rad, turn and percent notation.

<subscript>[source code](./src/css.js#L123); [global index](#global-constant-index), [CSS index](#global-constant-CSS-index)</subscript>

<a id="rgbaFuncRe"></a>
### `rgbaFuncRe`

Matches CSS3 'rgba(...) using '0...255 and percent (integer) notation.

<subscript>[source code](./src/css.js#L89); [global index](#global-constant-index), [CSS index](#global-constant-CSS-index)</subscript>

<a id="rgbFuncRe"></a>
### `rgbFuncRe`

Matches CSS1 'rgb(...) using '0...255 and percent (integer) notation.

<subscript>[source code](./src/css.js#L82); [global index](#global-constant-index), [CSS index](#global-constant-CSS-index)</subscript>

<a id="rgbRe"></a>
### `rgbRe`

Matches CSS4 'rgb(...) and rgba(...) functios  using '0...255 and percent (float) notation.

<subscript>[source code](./src/css.js#L105); [global index](#global-constant-index), [CSS index](#global-constant-CSS-index)</subscript>

<a id="zeroTo100FloatPercentRe"></a>
### `zeroTo100FloatPercentRe`

Matches a 0 to 100% float as used in CSS color specifications.

<subscript>[source code](./src/numbers.js#L67); [global index](#global-constant-index), [CSS numbers index](#global-constant-CSS-numbers-index)</subscript>

<a id="zeroTo100PercentRe"></a>
### `zeroTo100PercentRe`

Matches a 0 to 100% integer as used in CSS color specifications.

<subscript>[source code](./src/numbers.js#L60); [global index](#global-constant-index), [CSS numbers index](#global-constant-CSS-numbers-index)</subscript>

<a id="zeroTo1FloatRe"></a>
### `zeroTo1FloatRe`

Matches a 0 to 1 float as used in CSS color specifications.

<subscript>[source code](./src/numbers.js#L53); [global index](#global-constant-index), [CSS numbers index](#global-constant-CSS-numbers-index)</subscript>

<a id="zeroTo255FloatRe"></a>
### `zeroTo255FloatRe`

Matches a 0 to 255 float as used in CSS color specifications.

<subscript>[source code](./src/numbers.js#L81); [global index](#global-constant-index), [CSS numbers index](#global-constant-CSS-numbers-index)</subscript>

<a id="zeroTo255Re"></a>
### `zeroTo255Re`

Matches a 0 to 255 integer as used in CSS color specifications.

<subscript>[source code](./src/numbers.js#L74); [global index](#global-constant-index), [CSS numbers index](#global-constant-CSS-numbers-index)</subscript>

<a id="zeroTo360FloatRe"></a>
### `zeroTo360FloatRe`

Matches a 0 to 360 float as used in CSS color specifications.

<subscript>[source code](./src/numbers.js#L95); [global index](#global-constant-index), [CSS numbers index](#global-constant-CSS-numbers-index)</subscript>

<a id="zeroTo360Re"></a>
### `zeroTo360Re`

Matches a 0 to 360 integer as used in CSS color specifications.

<subscript>[source code](./src/numbers.js#L88); [global index](#global-constant-index), [CSS numbers index](#global-constant-CSS-numbers-index)</subscript>

<a id="intlDateRe"></a>
### `intlDateRe`

Matches an international style 'YYYY/MM/DD' string. Accepts separators '.', '/', '-'. Will except 1 or 2 digits for 
month and day and 1-4 digits for the year. Also accepts a + or - before the year. Provides capture groups 1 (BCE/CE 
indicator), 2 (year), 3 (month), 4 (day).

<subscript>[source code](./src/date-times.mjs#L107); [global index](#global-constant-index), [Date time index](#global-constant-Date-time-index)</subscript>

<a id="iso8601DateRe"></a>
### `iso8601DateRe`

Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date time like '20240101T1212Z. Provides matching 
groups 1 (year), 3 (month), and 4 (day of month), 5 (week of year), 6 (day of week date), and 7 (ordinal or Julian 
date), 8 (special end of day time), 10 (hour), 11 (decimal fraction of hour), 13 (minute), 14 (decimal fraction of 
minute), 15 (seconds), 16 (decimal fraction of a second), and 17 (timezone designation). (Groups 2, 11, and 13 are 
internal back references.)

<subscript>[source code](./src/date-times.mjs#L51); [global index](#global-constant-index), [Date time index](#global-constant-Date-time-index)</subscript>

<a id="iso8601DateReString"></a>
### `iso8601DateReString`

Matches the time designation portion of an ISO 8601 date+time. Provides matching groups 1 (special end of day time), 
3 (hours), 3 (fraction of hour), 5 (minutes), 6 (fraction of minute), 7 (seconds), and 8 (fraction of seconds).

<subscript>[source code](./src/date-times.mjs#L42); [global index](#global-constant-index), [Date time index](#global-constant-Date-time-index)</subscript>

<a id="iso8601DateTimeRe"></a>
### `iso8601DateTimeRe`

Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) _requiring_ both date and time components. See 
[iso8601DateRe](#iso8601DateRe) for matching groups.

<subscript>[source code](./src/date-times.mjs#L59); [global index](#global-constant-index), [Date time index](#global-constant-Date-time-index)</subscript>

<a id="iso8601DayReString"></a>
### `iso8601DayReString`

An RE ready string that matches the day designation portion of an ISO 8601 date+time. Provides matching groups 1 (
year), 3 (month), and 4 (day of month), 5 (week of year), 6 (day of week date), and 7 (ordinal or Julian date).

<subscript>[source code](./src/date-times.mjs#L26); [global index](#global-constant-index), [Date time index](#global-constant-Date-time-index)</subscript>

<a id="militaryTimeRe"></a>
### `militaryTimeRe`

Matches military time style 'HHMM' string. Provides capture groups 1 (special 2400 time), 2 (hour), and 3 (minutes).

<subscript>[source code](./src/date-times.mjs#L114); [global index](#global-constant-index), [Date time index](#global-constant-Date-time-index)</subscript>

<a id="rfc2822DateRe"></a>
### `rfc2822DateRe`

Matches an [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) style date like 'Mon, 6 Jan 1992 
12:12 UTC'. Provides matching groups 1 (day of week), 2 (day of month), 3 (month name), and 4 (year), 5 (hour), 6 
(min), 7 (second), and 8 (time zone).

<subscript>[source code](./src/date-times.mjs#L87); [global index](#global-constant-index), [Date time index](#global-constant-Date-time-index)</subscript>

<a id="rfc2822DayReString"></a>
### `rfc2822DayReString`

An RE ready string that matches the day designation portion of an RFC 2822 date+time. Provides matching groups 1 
(day of week name), 2 (day of month), 3 (month name), 4 (year).

<subscript>[source code](./src/date-times.mjs#L66); [global index](#global-constant-index), [Date time index](#global-constant-Date-time-index)</subscript>

<a id="rfc2822TimeReString"></a>
### `rfc2822TimeReString`

An RE ready string that matches the time designation portion of an RFC 2822 date+time. Provides matching groups 1 
(hour), 2 (minutes), 3 (seconds), and 4 (timezone).

<subscript>[source code](./src/date-times.mjs#L78); [global index](#global-constant-index), [Date time index](#global-constant-Date-time-index)</subscript>

<a id="timeRe"></a>
### `timeRe`

Matches a twelve hour time designation, requires AM or PM designation. Allows optional leading 0 in hour. Provides 
matching groups 1 (hour), 2 (minutes), 3 (seconds, without decimal fractions), 4 (decimal fraction seconds), and 5 (
AM/PM indicator).

<subscript>[source code](./src/date-times.mjs#L123); [global index](#global-constant-index), [Date time index](#global-constant-Date-time-index)</subscript>

<a id="timezoneReString"></a>
### `timezoneReString`

An RE ready string that matches a general timezone designation; compliant with RFC 2822 timezone portion. Provides 
matching groups 1 (timezone).

<subscript>[source code](./src/date-times.mjs#L72); [global index](#global-constant-index), [Date time index](#global-constant-Date-time-index)</subscript>

<a id="twentyFourHourTimeRe"></a>
### `twentyFourHourTimeRe`

Matches a twenty-four hour time designationAllows optional leading 0 in hour. Provides matching groups 1 (special 
24:00 designation with optional seconds), 2 (hour), 3 (minutes), 4 (seconds, without decimal fractions), 5 (decimal 
fraction seconds).

<subscript>[source code](./src/date-times.mjs#L132); [global index](#global-constant-index), [Date time index](#global-constant-Date-time-index)</subscript>

<a id="usDateRe"></a>
### `usDateRe`

Matches a US style 'MM/DD/YYYY' string. Accepts separators '.', '/', '-'. Will except 1 or 2 digits for month and 
day and 1-4 digits for the year. Also accepts a + or - before the year. Provides capture groups 1 (month), 2 (day of 
month), 3 (BCE/CE indicator), and 4 (year).

<subscript>[source code](./src/date-times.mjs#L98); [global index](#global-constant-index), [Date time index](#global-constant-Date-time-index)</subscript>

<a id="domainLabelRe"></a>
### `domainLabelRe`

Matches a non-tld domain label. Enforces the 63 byte domain label limit for non-international (all ASCII) labels. 
See [domain name rules](#domain-name-rules). When using the partial string to create a Re, you must use the 'u' or 
'v' flag.

<subscript>[source code](./src/domain-name.mjs#L45); [global index](#global-constant-index), [Domain names index](#global-constant-Domain-names-index)</subscript>

<a id="fqDomainNameRe"></a>
### `fqDomainNameRe`

Matches fully qualified domain name (one or more subdomains + TLD). Partially enforces the 255 byte FQ domain name 
limit, but this is only valid for non-international (all ASCII) domain names because we can only count characters. 
When using the partial string to create a Re, you must use the 'u' or 'v' flag.

<subscript>[source code](./src/domain-name.mjs#L55); [global index](#global-constant-index), [Domain names index](#global-constant-Domain-names-index)</subscript>

<a id="localhostRe"></a>
### `localhostRe`

Matches any representation of localhost; the special name, IPV4 loopbacks, or IPV6 loopbacks.

<subscript>[source code](./src/domain-name.mjs#L25); [global index](#global-constant-index), [Domain names index](#global-constant-Domain-names-index)</subscript>

<a id="tldNameRe"></a>
### `tldNameRe`

Matches a Top Level Domain (TLD). See [domain name rules](#domain-name-rules). When using the partial string to 
create a Re, you must use the 'u' or 'v' flag.

<subscript>[source code](./src/domain-name.mjs#L34); [global index](#global-constant-index), [Domain names index](#global-constant-Domain-names-index)</subscript>

<a id="einRe"></a>
### `einRe`

Matches a valid EIN number.

<subscript>[source code](./src/ids.js#L42); [global index](#global-constant-index), [Identifiers index](#global-constant-Identifiers-index)</subscript>

<a id="ssnRe"></a>
### `ssnRe`

Matches a valid SSN. Provides 3 matching groups, 1 (area number), 2 
(group number), and 3 (serial number).

<subscript>[source code](./src/ids.js#L32); [global index](#global-constant-index), [Identifiers index](#global-constant-Identifiers-index)</subscript>

<a id="uuidRe"></a>
### `uuidRe`

Matches a UUID.

<subscript>[source code](./src/ids.js#L24); [global index](#global-constant-index), [Identifiers index](#global-constant-Identifiers-index)</subscript>

<a id="jsReservedWordRe"></a>
### `jsReservedWordRe`

Matches a JS resereved word.

<subscript>[source code](./src/javascript.js#L24); [global index](#global-constant-index), [Javascript index](#global-constant-Javascript-index)</subscript>

<a id="jsVariableRe"></a>
### `jsVariableRe`

Matches a valid JS variable name.

<subscript>[source code](./src/javascript.js#L32); [global index](#global-constant-index), [Javascript index](#global-constant-Javascript-index)</subscript>

<a id="ipAddressRe"></a>
### `ipAddressRe`

Matches a string in IP address format. Use 'ipHostRe' to match actually valid IP addresses.

<subscript>[source code](./src/network.mjs#L38); [global index](#global-constant-index), [Network index](#global-constant-Network-index)</subscript>

<a id="ipHostRe"></a>
### `ipHostRe`

Matches a valid, non-localhost IP address.

<subscript>[source code](./src/network.mjs#L30); [global index](#global-constant-index), [Network index](#global-constant-Network-index)</subscript>

<a id="ipV6Re"></a>
### `ipV6Re`

Matches a string in IPV6 format.

<subscript>[source code](./src/network.mjs#L65); [global index](#global-constant-index), [Network index](#global-constant-Network-index)</subscript>

<a id="ipVFutureRe"></a>
### `ipVFutureRe`

Matches potential future IP protocols.

<subscript>[source code](./src/network.mjs#L72); [global index](#global-constant-index), [Network index](#global-constant-Network-index)</subscript>

<a id="npmPackageNameRe"></a>
### `npmPackageNameRe`

Matches an NPM package name. Provides matching groups 1 (org name, 
if any) and 2 (package basename).

<subscript>[source code](./src/npm.js#L25); [global index](#global-constant-index), [NPM index](#global-constant-NPM-index)</subscript>

<a id="floatRe"></a>
### `floatRe`

Matches a float in either plan or scientific format.

<subscript>[source code](./src/numbers.js#L46); [global index](#global-constant-index), [Numbers index](#global-constant-Numbers-index)</subscript>

<a id="integerRe"></a>
### `integerRe`

Matches an integer.

<subscript>[source code](./src/numbers.js#L25); [global index](#global-constant-index), [Numbers index](#global-constant-Numbers-index)</subscript>

<a id="plainFloatRe"></a>
### `plainFloatRe`

Matches a plain (non-scientific notation) float.

<subscript>[source code](./src/numbers.js#L32); [global index](#global-constant-index), [Numbers index](#global-constant-Numbers-index)</subscript>

<a id="scientificFloatRe"></a>
### `scientificFloatRe`

Matches a scientific notation float.

<subscript>[source code](./src/numbers.js#L39); [global index](#global-constant-index), [Numbers index](#global-constant-Numbers-index)</subscript>

<a id="commonUrlRe"></a>
### `commonUrlRe`

Matches any of the "common" web URL types: 'mailto', 'http/https', 'ftp', and 'file'. You must use the either the 
'u' or 'v' flag when using the Re string.

<subscript>[source code](./src/url.mjs#L80); [global index](#global-constant-index), [URL index](#global-constant-URL-index)</subscript>

<a id="fileUrlRe"></a>
### `fileUrlRe`

Matches a valid 'file' URL. Provides capture groups 1 (host), 2 (port), 3 (path). You must use the either the 'u' or 
'v' flag when using the Re string.

<subscript>[source code](./src/url.mjs#L72); [global index](#global-constant-index), [URL index](#global-constant-URL-index)</subscript>

<a id="ftpUrlRe"></a>
### `ftpUrlRe`

Matches a valid 'ftp' URL. Provides capture groups 1 (username), 2 (user password), 3 (host or IP), 4 (port), 5 
(path). You must use the either the 'u' or 'v' flag when using the Re string.

<subscript>[source code](./src/url.mjs#L64); [global index](#global-constant-index), [URL index](#global-constant-URL-index)</subscript>

<a id="httpUrlRe"></a>
### `httpUrlRe`

Matches a valid 'http/https' URL. Provides capture groups 1 (protocol), 2 (username), 3 (user password), 4 (host or 
IP), 5 (port), 6 (path), 7 (query string), and 8 (fragment). You must use the either the 'u' or 'v' flag when using 
the Re string.

<subscript>[source code](./src/url.mjs#L56); [global index](#global-constant-index), [URL index](#global-constant-URL-index)</subscript>

<a id="mailtoUrlRe"></a>
### `mailtoUrlRe`

Matches a valid 'mailto:' URL. Provides a single capture group, 1 (email address).' You must use the either the 'u' 
or 'v' flag when using the Re string.

<subscript>[source code](./src/url.mjs#L38); [global index](#global-constant-index), [URL index](#global-constant-URL-index)</subscript>

<a id="urlRe"></a>
### `urlRe`

Matches a valid, generic URL. Provides capture groups 1 (schema), 2 (server/authority), 3 (path), 4 (query part), 5 (
intra-page link/fragment.) Note, a URL always has scheme, and at a minimum a server/authority or path, and may have 
both. The query and fragment components are always optional. For general usage, you might want to use the more 
specific Res for specific protocols or the `commonUrlRe`.

<subscript>[source code](./src/url.mjs#L30); [global index](#global-constant-index), [URL index](#global-constant-URL-index)</subscript>

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
  
