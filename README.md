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
<dt><a href="#module_regex-repo">regex-repo</a></dt>
<dd></dd>
<dt><a href="#module_regex-repo">regex-repo</a></dt>
<dd></dd>
</dl>

Constants:
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

<a id="module_regex-repo"></a>
### regex-repo


[**Source code**](./src/aws.js#L16)


* [regex-repo](#module_regex-repo)
    * _AWS_
        * [`.awsS3BucketNameRe`](#module_regex-repo.awsS3BucketNameRe)
        * [`.awsS3TaBucketNameRe`](#module_regex-repo.awsS3TaBucketNameRe)
    * _Contacts_
        * [`.emailRe`](#module_regex-repo.emailRe)
        * [`.usPhoneRe`](#module_regex-repo.usPhoneRe)
        * [`.zipCodeRe`](#module_regex-repo.zipCodeRe)

<a id="module_regex-repo.awsS3BucketNameRe"></a>
#### `regex-repo.awsS3BucketNameRe`

Matches (most) valid S3 bucket name. Note `awsS3BucketNameReString` cannot be used for partial matches. Does not 
enforce 63 character limit.


**Kind**: static constant of [`regex-repo`](#module_regex-repo)  
**Category**: AWS  

[**Source code**](./src/aws.js#L35)

<a id="module_regex-repo.awsS3TaBucketNameRe"></a>
#### `regex-repo.awsS3TaBucketNameRe`

Matches (most) S3 Transfer Acceleration compatible S3 bucket name. Note `awsS3TaBucketNameReString` cannot be used 
for partial matches.


**Kind**: static constant of [`regex-repo`](#module_regex-repo)  
**Category**: AWS  

[**Source code**](./src/aws.js#L27)

<a id="module_regex-repo.emailRe"></a>
#### `regex-repo.emailRe`

Match most valid emails. Provides matching groups 1 (user name) and 2 (domain). When using the partial string to 
create a Re, you must use the 'u' flag.


**Kind**: static constant of [`regex-repo`](#module_regex-repo)  
**Category**: Contacts  

[**Source code**](./src/contacts.js#L41)

<a id="module_regex-repo.usPhoneRe"></a>
#### `regex-repo.usPhoneRe`

Matches US phone numbers with optional country code and area code.


**Kind**: static constant of [`regex-repo`](#module_regex-repo)  
**Category**: Contacts  

[**Source code**](./src/contacts.js#L26)

<a id="module_regex-repo.zipCodeRe"></a>
#### `regex-repo.zipCodeRe`

Matches 5 or 9 digit US zip codes.


**Kind**: static constant of [`regex-repo`](#module_regex-repo)  
**Category**: Contacts  

[**Source code**](./src/contacts.js#L33)

<a id="module_regex-repo"></a>
### regex-repo


[**Source code**](./src/contacts.js#L16)


* [regex-repo](#module_regex-repo)
    * _AWS_
        * [`.awsS3BucketNameRe`](#module_regex-repo.awsS3BucketNameRe)
        * [`.awsS3TaBucketNameRe`](#module_regex-repo.awsS3TaBucketNameRe)
    * _Contacts_
        * [`.emailRe`](#module_regex-repo.emailRe)
        * [`.usPhoneRe`](#module_regex-repo.usPhoneRe)
        * [`.zipCodeRe`](#module_regex-repo.zipCodeRe)

<a id="module_regex-repo.awsS3BucketNameRe"></a>
#### `regex-repo.awsS3BucketNameRe`

Matches (most) valid S3 bucket name. Note `awsS3BucketNameReString` cannot be used for partial matches. Does not 
enforce 63 character limit.


**Kind**: static constant of [`regex-repo`](#module_regex-repo)  
**Category**: AWS  

[**Source code**](./src/aws.js#L35)

<a id="module_regex-repo.awsS3TaBucketNameRe"></a>
#### `regex-repo.awsS3TaBucketNameRe`

Matches (most) S3 Transfer Acceleration compatible S3 bucket name. Note `awsS3TaBucketNameReString` cannot be used 
for partial matches.


**Kind**: static constant of [`regex-repo`](#module_regex-repo)  
**Category**: AWS  

[**Source code**](./src/aws.js#L27)

<a id="module_regex-repo.emailRe"></a>
#### `regex-repo.emailRe`

Match most valid emails. Provides matching groups 1 (user name) and 2 (domain). When using the partial string to 
create a Re, you must use the 'u' flag.


**Kind**: static constant of [`regex-repo`](#module_regex-repo)  
**Category**: Contacts  

[**Source code**](./src/contacts.js#L41)

<a id="module_regex-repo.usPhoneRe"></a>
#### `regex-repo.usPhoneRe`

Matches US phone numbers with optional country code and area code.


**Kind**: static constant of [`regex-repo`](#module_regex-repo)  
**Category**: Contacts  

[**Source code**](./src/contacts.js#L26)

<a id="module_regex-repo.zipCodeRe"></a>
#### `regex-repo.zipCodeRe`

Matches 5 or 9 digit US zip codes.


**Kind**: static constant of [`regex-repo`](#module_regex-repo)  
**Category**: Contacts  

[**Source code**](./src/contacts.js#L33)

<a id="cssColor3Re"></a>
### `cssColor3Re`

Matches CSS3 'hex, rgb, rgba, hsl, and predefined colors.

**Category**: CSS  

[**Source code**](./src/css.js#L135)

<a id="cssColorRe"></a>
### `cssColorRe`

Matches CSS4 'hex, rgb, rgba, hsl, and predefined colors.

**Category**: CSS  

[**Source code**](./src/css.js#L146)

<a id="cssPreColors1Re"></a>
### `cssPreColors1Re`

Matches CSS1 predefined color names.

**Category**: CSS  

[**Source code**](./src/css.js#L48)

<a id="cssPreColors2Re"></a>
### `cssPreColors2Re`

Matches CSS2 predefined color names.

**Category**: CSS  

[**Source code**](./src/css.js#L55)

<a id="cssPreColors3Re"></a>
### `cssPreColors3Re`

Matches CSS3 predefined color names.

**Category**: CSS  

[**Source code**](./src/css.js#L62)

<a id="cssPreColorsRe"></a>
### `cssPreColorsRe`

Matches CSS4 predefined color names.

**Category**: CSS  

[**Source code**](./src/css.js#L69)

<a id="hexColorAlphaRe"></a>
### `hexColorAlphaRe`

Matches hex specified RGBA colors with an alpha channel.

**Category**: CSS  

[**Source code**](./src/css.js#L41)

<a id="hexColorNoAlphaRe"></a>
### `hexColorNoAlphaRe`

Matches hex specified RGB colors with no alpha channel.

**Category**: CSS  

[**Source code**](./src/css.js#L33)

<a id="hsl3Re"></a>
### `hsl3Re`

Matches CSS3 'hsl(...) and hsla(...) deg and percent notation.

**Category**: CSS  

[**Source code**](./src/css.js#L115)

<a id="hslRe"></a>
### `hslRe`

Matches CSS4 'hsl(...) and hsla(...) deg, grad, rad, turn and percent notation.

**Category**: CSS  

[**Source code**](./src/css.js#L123)

<a id="rgbaFuncRe"></a>
### `rgbaFuncRe`

Matches CSS3 'rgba(...) using '0...255 and percent (integer) notation.

**Category**: CSS  

[**Source code**](./src/css.js#L89)

<a id="rgbFuncRe"></a>
### `rgbFuncRe`

Matches CSS1 'rgb(...) using '0...255 and percent (integer) notation.

**Category**: CSS  

[**Source code**](./src/css.js#L82)

<a id="rgbRe"></a>
### `rgbRe`

Matches CSS4 'rgb(...) and rgba(...) functios  using '0...255 and percent (float) notation.

**Category**: CSS  

[**Source code**](./src/css.js#L105)

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
  
