export const groupTest = (data, re, isValid) =>
  data.forEach((datum) =>
    test(`${isValid ? 'pass' : 'fail'} '${datum}'`, () => {
      expect(re.test(datum)).toBe(isValid)
    })
  )
