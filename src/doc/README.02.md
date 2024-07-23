## Domain name rules

Unfortunately, there isn't clear consensus on what is allowed in a subdomain vs a top level domain (TLD); referred to collectively as 'domain labels'. So, here are the rules we follow:

* All domain labels must be at least 2 and no more than 63 bytes in length. This means that you can have domain names which are a single two-byte Unicode character.
* A fully qualified domain is limited to 255 bytes in total.
* TLDs may only contain alpha characters (any Unicode letter).
* Subdomain labels (non-TLD labels):
  * are composed of alpha-numeric characters (any Unicode letter plus 0-9) and hyphens ('-'), except
  * the label must begin and end with an alpha-numeric character (any Uniced letter, 0-9; no hyphens), and
  * the label must not have consecutive hyphens in the 3rd and 4th position. E.g. 'xy--z' is invalid.

Also note, the base domain label REs do not support International Domain Names (IDNs; also called 'special character domain names').