## Domain name rules

Unfortunately, there isn't clear consensus on what is allowed in a subdomain vs a registerable domain vs a top level domain (TLD); referred to collectively as 'domain labels'. So, here are the rules we follow:

* All domain labels must be at least 2 and no more than 63 characters in length. The 63 character limit is __not__ enforced by the regular expressions.
* TLDs:
  * must begin with an alpha character (a-z).
  * may not have two consecutive hyphens.
* Registerable domains:
  * must begin with an alpha-numeric character (a-z, 0-9).
  * may have consecutive hyphens except in the 3rd and 4th position.
* Sub-domains:
  * must begin with an alpha-numeric character (a-z, 0-9).
  * may have consecutive hyphens anywhere.

Also note, the base domain label REs do not support International Domain Names (IDNs; also called 'special character domain names').