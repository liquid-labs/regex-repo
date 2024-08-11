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

##  API Reference
_API generated with [dmd-readme-api](https://www.npmjs.com/package/dmd-readme-api)._

### Modules

<dl>
<dt><a href="#module_AWS">AWS</a></dt>
<dd></dd>
<dt><a href="#module_Contacts">Contacts</a></dt>
<dd></dd>
<dt><a href="#module_CSS">CSS</a></dt>
<dd></dd>
</dl>


<a id="module_AWS"></a>
### AWS


[**Source code**](./src/aws.js#L16)


* [AWS](#module_AWS)
    * [`.awsS3BucketNameRe`](#module_AWS.awsS3BucketNameRe)
    * [`.awsS3TaBucketNameRe`](#module_AWS.awsS3TaBucketNameRe)

<a id="module_AWS.awsS3BucketNameRe"></a>
#### `AWS.awsS3BucketNameRe`

Matches (most) valid S3 bucket name. Note `awsS3BucketNameReString` cannot be used for partial matches. Does not 
enforce 63 character limit.


**Kind**: static constant of [`AWS`](#module_AWS)  

[**Source code**](./src/aws.js#L33)

<a id="module_AWS.awsS3TaBucketNameRe"></a>
#### `AWS.awsS3TaBucketNameRe`

Matches (most) S3 Transfer Acceleration compatible S3 bucket name. Note `awsS3TaBucketNameReString` cannot be used 
for partial matches.


**Kind**: static constant of [`AWS`](#module_AWS)  

[**Source code**](./src/aws.js#L26)

<a id="module_Contacts"></a>
### Contacts


[**Source code**](./src/contacts.js#L16)


* [Contacts](#module_Contacts)
    * [`.emailRe`](#module_Contacts.emailRe)
    * [`.usPhoneRe`](#module_Contacts.usPhoneRe)
    * [`.zipCodeRe`](#module_Contacts.zipCodeRe)

<a id="module_Contacts.emailRe"></a>
#### `Contacts.emailRe`

Match most valid emails. Provides matching groups 1 (user name) and 2 (domain). When using the partial string to 
create a Re, you must use the 'u' flag.


**Kind**: static constant of [`Contacts`](#module_Contacts)  

[**Source code**](./src/contacts.js#L38)

<a id="module_Contacts.usPhoneRe"></a>
#### `Contacts.usPhoneRe`

Matches US phone numbers with optional country code and area code.


**Kind**: static constant of [`Contacts`](#module_Contacts)  

[**Source code**](./src/contacts.js#L25)

<a id="module_Contacts.zipCodeRe"></a>
#### `Contacts.zipCodeRe`

Matches 5 or 9 digit US zip codes.


**Kind**: static constant of [`Contacts`](#module_Contacts)  

[**Source code**](./src/contacts.js#L31)

<a id="module_CSS"></a>
### CSS


[**Source code**](./src/css.js#L16)


* [CSS](#module_CSS)
    * [`.cssColor3Re`](#module_CSS.cssColor3Re)
    * [`.cssColorRe`](#module_CSS.cssColorRe)
    * [`.cssPreColors1Re`](#module_CSS.cssPreColors1Re)
    * [`.cssPreColors2Re`](#module_CSS.cssPreColors2Re)
    * [`.cssPreColors3Re`](#module_CSS.cssPreColors3Re)
    * [`.cssPreColorsRe`](#module_CSS.cssPreColorsRe)
    * [`.hexColorAlphaRe`](#module_CSS.hexColorAlphaRe)
    * [`.hexColorNoAlphaRe`](#module_CSS.hexColorNoAlphaRe)
    * [`.hsl3Re`](#module_CSS.hsl3Re)
    * [`.hslRe`](#module_CSS.hslRe)
    * [`.rgbaFuncRe`](#module_CSS.rgbaFuncRe)
    * [`.rgbFuncRe`](#module_CSS.rgbFuncRe)
    * [`.rgbRe`](#module_CSS.rgbRe)

<a id="module_CSS.cssColor3Re"></a>
#### `CSS.cssColor3Re`

Matches CSS3 'hex, rgb, rgba, hsl, and predefined colors.


**Kind**: static constant of [`CSS`](#module_CSS)  

[**Source code**](./src/css.js#L124)

<a id="module_CSS.cssColorRe"></a>
#### `CSS.cssColorRe`

Matches CSS4 'hex, rgb, rgba, hsl, and predefined colors.


**Kind**: static constant of [`CSS`](#module_CSS)  

[**Source code**](./src/css.js#L134)

<a id="module_CSS.cssPreColors1Re"></a>
#### `CSS.cssPreColors1Re`

Matches CSS1 predefined color names.


**Kind**: static constant of [`CSS`](#module_CSS)  

[**Source code**](./src/css.js#L46)

<a id="module_CSS.cssPreColors2Re"></a>
#### `CSS.cssPreColors2Re`

Matches CSS2 predefined color names.


**Kind**: static constant of [`CSS`](#module_CSS)  

[**Source code**](./src/css.js#L52)

<a id="module_CSS.cssPreColors3Re"></a>
#### `CSS.cssPreColors3Re`

Matches CSS3 predefined color names.


**Kind**: static constant of [`CSS`](#module_CSS)  

[**Source code**](./src/css.js#L58)

<a id="module_CSS.cssPreColorsRe"></a>
#### `CSS.cssPreColorsRe`

Matches CSS4 predefined color names.


**Kind**: static constant of [`CSS`](#module_CSS)  

[**Source code**](./src/css.js#L64)

<a id="module_CSS.hexColorAlphaRe"></a>
#### `CSS.hexColorAlphaRe`

Matches hex specified RGBA colors with an alpha channel.


**Kind**: static constant of [`CSS`](#module_CSS)  

[**Source code**](./src/css.js#L40)

<a id="module_CSS.hexColorNoAlphaRe"></a>
#### `CSS.hexColorNoAlphaRe`

Matches hex specified RGB colors with no alpha channel.


**Kind**: static constant of [`CSS`](#module_CSS)  

[**Source code**](./src/css.js#L33)

<a id="module_CSS.hsl3Re"></a>
#### `CSS.hsl3Re`

Matches CSS3 'hsl(...) and hsla(...) deg and percent notation.


**Kind**: static constant of [`CSS`](#module_CSS)  

[**Source code**](./src/css.js#L106)

<a id="module_CSS.hslRe"></a>
#### `CSS.hslRe`

Matches CSS4 'hsl(...) and hsla(...) deg, grad, rad, turn and percent notation.


**Kind**: static constant of [`CSS`](#module_CSS)  

[**Source code**](./src/css.js#L113)

<a id="module_CSS.rgbaFuncRe"></a>
#### `CSS.rgbaFuncRe`

Matches CSS3 'rgba(...) using '0...255 and percent (integer) notation.


**Kind**: static constant of [`CSS`](#module_CSS)  

[**Source code**](./src/css.js#L82)

<a id="module_CSS.rgbFuncRe"></a>
#### `CSS.rgbFuncRe`

Matches CSS1 'rgb(...) using '0...255 and percent (integer) notation.


**Kind**: static constant of [`CSS`](#module_CSS)  

[**Source code**](./src/css.js#L76)

<a id="module_CSS.rgbRe"></a>
#### `CSS.rgbRe`

Matches CSS4 'rgb(...) and rgba(...) functios  using '0...255 and percent (float) notation.


**Kind**: static constant of [`CSS`](#module_CSS)  

[**Source code**](./src/css.js#L97)

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
  
