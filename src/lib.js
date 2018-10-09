export const lockdownRe = (str, flags) =>
  Array.isArray(str)
    ? new RegExp(`^\\s*(${str.join('|')})\\s$`, flags)
    : new RegExp(`^\\s*${str}\\s*$`, flags)

const groupTestHelper = (re, data, isValid, desc) =>
  data.forEach((datum) =>
    test(`${desc ? desc + ' should ' : ''}${isValid ? 'pass' : 'fail'} '${datum}'`, () => {
      expect(re.test(datum)).toBe(isValid)
    })
  )

export const groupTest = (re, validData, invalidData, desc) => {
  groupTestHelper(re, validData, true, desc)
  groupTestHelper(re, invalidData, false, desc)
}
