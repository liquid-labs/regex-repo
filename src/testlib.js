const groupTestHelper = (re, data, isValid) =>
  data.forEach((datum) =>
    test(`${isValid ? 'pass' : 'fail'} '${datum}'`, () => {
      expect(re.test(datum)).toBe(isValid)
    })
  )

export const groupTest = (re, validData, invalidData) => {
  groupTestHelper(re, validData, true)
  groupTestHelper(re, invalidData, false)
}
