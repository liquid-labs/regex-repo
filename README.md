# regex-repo
![coverage: 100%](./.readme-assets/coverage.svg) [![Unit tests](https://github.com/liquid-labs/regex-repo/actions/workflows/unit-tests-node.yaml/badge.svg)](https://github.com/liquid-labs/regex-repo/actions/workflows/unit-tests-node.yaml)

A a collection of useful regular expressions. Refer to the [regex reference](#regex-reference) below for a list of the provided REs.

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

Each regular expression listed below is paired with an embeddable string named `xxxString`. E.g., `rgbRe` is paired with `rgbReString`. Each Re will only match strings that are the given type and nothing else. I.e., the RE begins with '^' and ends with '$'. The `xxxReString` can be used for partial matches, `matchAll`s, and used as part of larger expressions. E.g., to find all unique CSS RGB colors used in a style sheet, you might do something like:

```javascript
import { rgbReString } from '@liquid-labs/regex-repo'

const allColors = cssContent
  .matchAll(new RegExp(`[ :](${rgbReString})[; }]`, 'g'))
  .map((match) => match[1]) // extract the capture group
  .filter((v, i, arr) => i === arr.indexOf(v)) // filter non-unique items
  .sort()
```

### AWS

- <span id="awss3bucketnamere">__`awsS3BucketNameRe`__</span>: Matches (most) valid S3 bucket name. Note `awsS3BucketNameReString` cannot be used for partial matches. Does not enforce 63 character limit.
- <span id="awss3tabucketnamere">__`awsS3TaBucketNameRe`__</span>: Matches (most) S3 Transfer Acceleration compatible S3 bucket name. Note `awsS3TaBucketNameReString` cannot be used for partial matches.

### CSS numbers

- <span id="zeroto100floatpercentre">__`zeroTo100FloatPercentRe`__</span>: Matches a 0 to 100% float as used in CSS color specifications.
- <span id="zeroto100percentre">__`zeroTo100PercentRe`__</span>: Matches a 0 to 100% integer as used in CSS color specifications.
- <span id="zeroto1floatre">__`zeroTo1FloatRe`__</span>: Matches a 0 to 1 float as used in CSS color specifications.
- <span id="zeroto255floatre">__`zeroTo255FloatRe`__</span>: Matches a 0 to 255 float as used in CSS color specifications.
- <span id="zeroto255re">__`zeroTo255Re`__</span>: Matches a 0 to 255 integer as used in CSS color specifications.
- <span id="zeroto360floatre">__`zeroTo360FloatRe`__</span>: Matches a 0 to 360 float as used in CSS color specifications.
- <span id="zeroto360re">__`zeroTo360Re`__</span>: Matches a 0 to 360 integer as used in CSS color specifications.

### Colors/CSS

- <span id="csscolor3re">__`cssColor3Re`__</span>: Matches CSS3 'hex, rgb, rgba, hsl, and predefined colors.
- <span id="csscolorre">__`cssColorRe`__</span>: Matches CSS4 'hex, rgb, rgba, hsl, and predefined colors.
- <span id="cssprecolors1re">__`cssPreColors1Re`__</span>: Matches CSS1 predefined color names.
- <span id="cssprecolors2re">__`cssPreColors2Re`__</span>: Matches CSS2 predefined color names.
- <span id="cssprecolors3re">__`cssPreColors3Re`__</span>: Matches CSS3 predefined color names.
- <span id="cssprecolorsre">__`cssPreColorsRe`__</span>: Matches CSS4 predefined color names.
- <span id="hexcoloralphare">__`hexColorAlphaRe`__</span>: Matches hex specified RGBA colors with an alpha channel.
- <span id="hexcolornoalphare">__`hexColorNoAlphaRe`__</span>: Matches hex specified RGB colors with no alpha channel.
- <span id="hsl3re">__`hsl3Re`__</span>: Matches CSS3 'hsl(...) and hsla(...) deg and percent notation.
- <span id="hslre">__`hslRe`__</span>: Matches CSS4 'hsl(...) and hsla(...) deg, grad, rad, turn and percent notation.
- <span id="rgbafuncre">__`rgbaFuncRe`__</span>: Matches CSS3 'rgba(...) using '0...255 and percent (integer) notation.
- <span id="rgbfuncre">__`rgbFuncRe`__</span>: Matches CSS1 'rgb(...) using '0...255 and percent (integer) notation.
- <span id="rgbre">__`rgbRe`__</span>: Matches CSS4 'rgb(...) and rgba(...) functios  using '0...255 and percent (float) notation.

### Contact info

- <span id="emailre">__`emailRe`__</span>: Match most valid emails. Provides matching groups 1 (user name) and 2 (domain). When using the partial string to create a Re, you must use the 'u' flag.
- <span id="usphonere">__`usPhoneRe`__</span>: Matches US phone numbers with optional country code and area code.
- <span id="zipcodere">__`zipCodeRe`__</span>: Matches 5 or 9 digit US zip codes.

### Date/Time

- <span id="intldatere">__`intlDateRe`__</span>: Matches an international style 'YYYY/MM/DD' string. Accepts separators '.', '/', '-'. Will except 1 or 2 digits for month and day and 1-4 digits for the year. Also accepts a + or - before the year. Provides capture groups 1 (BCE/CE indicator), 2 (year), 3 (month), 4 (day).
- <span id="iso8601datere">__`iso8601DateRe`__</span>: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date time like '20240101T1212Z. Provides matching groups 1 (year), 3 (month), and 4 (day of month), 5 (week of year), 6 (day of week date), and 7 (ordinal or Julian date), 8 (special end of day time), 10 (hour), 11 (decimal fraction of hour), 13 (minute), 14 (decimal fraction of minute), 15 (seconds), 16 (decimal fraction of a second), and 17 (timezone designation). (Groups 2, 11, and 13 are internal back references.)
- <span id="iso8601datetimere">__`iso8601DateTimeRe`__</span>: Matches an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) _requiring_ both date and time components. See [`iso8601DateRe`](#iso8601datere) for matching groups.
- <span id="iso8601dayrestring">__`iso8601DayReString`__</span>: (string only) Matches the day designation portion of an ISO 8601 date+time. Provides matching groups 1 (year), 3 (month), and 4 (day of month), 5 (week of year), 6 (day of week date), and 7 (ordinal or Julian date).
- <span id="iso8601timerestring">__`iso8601TimeReString`__</span>: (string only) Matches the time designation portion of an ISO 8601 date+time. Provides matching groups 1 (special end of day time), 3 (hours), 3 (fraction of hour), 5 (minutes), 6 (fraction of minute), 7 (seconds), and 8 (fraction of seconds).
- <span id="militarytimere">__`militaryTimeRe`__</span>: Matches military time style 'HHMM' string. Provides capture groups 1 (special 2400 time), 2 (hour), and 3 (minutes).
- <span id="rfc2822datere">__`rfc2822DateRe`__</span>: Matches an [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) style date like 'Mon, 6 Jan 1992 12:12 UTC'. Provides matching groups 1 (day of week), 2 (day of month), 3 (month name), and 4 (year), 5 (hour), 6 (min), 7 (second), and 8 (time zone).
- <span id="rfc2822dayrestring">__`rfc2822DayReString`__</span>: (string only) Matches the day designation portion of an RFC 2822 date+time. Provides matching groups 1 (day of week name), 2 (day of month), 3 (month name), 4 (year).
- <span id="rfc2822timerestring">__`rfc2822TimeReString`__</span>: (string only) Matches the time designation portion of an RFC 2822 date+time. Provides matching groups 1 (hour), 2 (minutes), 3 (seconds), and 4 (timezone).
- <span id="timere">__`timeRe`__</span>: Matches a twelve hour time designation, requires AM or PM designation. Allows optional leading 0 in hour. Provides matching groups 1 (hour), 2 (minutes), 3 (seconds, without decimal fractions), 4 (decimal fraction seconds), and 5 (AM/PM indicator).
- <span id="timezonerestring">__`timezoneReString`__</span>: (string only) Matches a general timezone designation; compliant with RFC 2822 timezone portion. Provides matching groups 1 (timezone).
- <span id="twentyfourhourtimere">__`twentyFourHourTimeRe`__</span>: Matches a twenty-four hour time designationAllows optional leading 0 in hour. Provides matching groups 1 (special 24:00 designation with optional seconds), 2 (hour), 3 (minutes), 4 (seconds, without decimal fractions), 5 (decimal fraction seconds).
- <span id="usdatere">__`usDateRe`__</span>: Matches a US style 'MM/DD/YYYY' string. Accepts separators '.', '/', '-'. Will except 1 or 2 digits for month and day and 1-4 digits for the year. Also accepts a + or - before the year. Provides capture groups 1 (month), 2 (day of month), 3 (BCE/CE indicator), and 4 (year).

### Identifiers

- <span id="einre">__`einRe`__</span>: Matches a valid EIN number.
- <span id="ssnre">__`ssnRe`__</span>: Matches a valid SSN. Provides 3 matching groups, 1 (area number), 2 (group number), and 3 (serial number).
- <span id="uuidre">__`uuidRe`__</span>: Matches a UUID.

### JavaScript

- <span id="jsreservedwordre">__`jsReservedWordRe`__</span>: Matches a JS resereved word.
- <span id="jsvariablere">__`jsVariableRe`__</span>: Matches a valid JS variable name.

### NPM

- <span id="npmpackagenamere">__`npmPackageNameRe`__</span>: Matches an NPM package name. Provides matching groups 1 (org name, if any) and 2 (package basename).

### Numbers

- <span id="floatre">__`floatRe`__</span>: Matches a float in either plan or scientific format.
- <span id="integerre">__`integerRe`__</span>: Matches an integer.
- <span id="plainfloatre">__`plainFloatRe`__</span>: Matches a plain (non-scientific notation) float.
- <span id="scientificfloatre">__`scientificFloatRe`__</span>: Matches a scientific notation float.

### Web

- <span id="commonurlre">__`commonUrlRe`__</span>: Matches any of the "common" web URL types: 'mailto', 'http/https', 'ftp', and 'file'. You must use the either the 'u' or 'v' flag when using the Re string.
- <span id="domainlabelre">__`domainLabelRe`__</span>: Matches a non-tld domain label. Enforces the 63 byte domain label limit for non-international (all ASCII) labels. See [domain name rules](#domain-name-rules). When using the partial string to create a Re, you must use the 'u' or 'v' flag.
- <span id="fileurlre">__`fileUrlRe`__</span>: Matches a valid 'file' URL. Provides capture groups 1 (host), 2 (port), 3 (path). You must use the either the 'u' or 'v' flag when using the Re string.
- <span id="fqdomainnamere">__`fqDomainNameRe`__</span>: Matches fully qualified domain name (one or more subdomains + TLD). Partially enforces the 255 byte FQ domain name limit, but this is only valid for non-international (all ASCII) domain names because we can only count characters. When using the partial string to create a Re, you must use the 'u' or 'v' flag.
- <span id="ftpurlrestring">__`ftpUrlReString`__</span>: Matches a valid 'ftp' URL. Provides capture groups 1 (username), 2 (user password), 3 (host or IP), 4 (port), 5 (path). You must use the either the 'u' or 'v' flag when using the Re string.
- <span id="httpurlre">__`httpUrlRe`__</span>: Matches a valid 'http/https' URL. Provides capture groups 1 (protocol), 2 (username), 3 (user password), 4 (host or IP), 5 (port), 6 (path), 7 (query string), and 8 (fragment). You must use the either the 'u' or 'v' flag when using the Re string.
- <span id="ipaddressre">__`ipAddressRe`__</span>: Matches a string in IP address format. Use 'ipHostRe' to match actually valid IP addresses.
- <span id="iphostre">__`ipHostRe`__</span>: Matches a valid, non-localhost IP address.
- <span id="ipv6re">__`ipV6Re`__</span>: Matches a string in IPV6 format.
- <span id="ipvfuturere">__`ipVFutureRe`__</span>: Matches potential future IP protocols.
- <span id="localhostre">__`localhostRe`__</span>: Matches any representation of localhost; the special name, IPV4 loopbacks, or IPV6 loopbacks.
- <span id="mailtourlre">__`mailtoUrlRe`__</span>: Matches a valid 'mailto:' URL. Provides a single capture group, 1 (email address).' You must use the either the 'u' or 'v' flag when using the Re string.
- <span id="tldnamere">__`tldNameRe`__</span>: Matches a Top Level Domain (TLD). See [domain name rules](#domain-name-rules). When using the partial string to create a Re, you must use the 'u' or 'v' flag.
- <span id="urlre">__`urlRe`__</span>: Matches a valid, generic URL. Provides capture groups 1 (schema), 2 (server/authority), 3 (path), 4 (query part), 5 (intra-page link/fragment.) Note, a URL always has scheme, and at a minimum a server/authority or path, and may have both. The query and fragment components are always optional. For general usage, you might want to use the more specific Res for specific protocols or the `commonUrlRe`.

### based on the generic URI Re given in [RFC 3986](https

- <span id="urlrestring">__`urlReString`__</span>: //datatracker.ietf.org/doc/html/rfc3986#page-51).

### credit to

- <span id="ipv6restring">__`ipV6ReString`__</span>: https://stackoverflow.com/a/17871737/929494

### export const fqDomainNameReString = `(?![0-9\\p{L}.\\-]{256,})(?

- <span id="fqdomainnamerestring">__`fqDomainNameReString`__</span>: ${domainLabelReString}\\.)+${tldNameReString}`

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
  
