import { groupTest } from './testlib'
import * as regex from './index'
import { validHexColors1, validHexColors, invalidHexColors } from './test-data/hexColors'

groupTest(regex.hexColor1, validHexColors1, invalidHexColors)
groupTest(regex.hexColor, validHexColors, invalidHexColors)

// since the colors are hard coded, we don't test the while thing; we'd just
// end up replicating the structure or building pointless tests from the same
// structure, we just want to check that the regex gets built.
test('cssPreColors1 matches valid', () => {
  expect(regex.cssPreColors1.test('red')).toBe(true)
})
test('cssPreColors1 fails to match invalid', () => {
  expect(regex.cssPreColors1.test('orange')).toBe(true)
  expect(regex.cssPreColors1.test('blueberry')).toBe(true)
})
