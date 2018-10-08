import { urlRe } from './web'
import { goodUrls, badUrls } from './test-data/urls'

goodUrls.forEach((url) =>
  test(`pass '${url}'`, () => {
    expect(urlRe.test(url)).toBe(true)
  })
)

badUrls.forEach((url) =>
  test(`fail '${url}'`, () => {
    expect(urlRe.test(url)).toBe(false)
  })
)
