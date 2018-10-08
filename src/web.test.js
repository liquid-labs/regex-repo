import * as regex from './web'
import { goodUrls, badUrls } from './test-data/urls'
import { goodEmails, badEmails } from './test-data/emails'

goodUrls.forEach((url) =>
  test(`pass '${url}'`, () => {
    expect(regex.url.test(url)).toBe(true)
  })
)

badUrls.forEach((url) =>
  test(`fail '${url}'`, () => {
    expect(regex.url.test(url)).toBe(false)
  })
)

goodEmails.forEach((email) =>
  test(`pass '${email}'`, () => {
    expect(regex.email.test(email)).toBe(true)
  })
)

badEmails.forEach((email) =>
  test(`fail '${email}'`, () => {
    expect(regex.email.test(email)).toBe(false)
  })
)
