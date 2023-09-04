export const goodEmails = [
  'foo@bar.com',
  'foo@bar.org',
  'foo@bar.xqc',
  'foo@baz.bar.xqc',
  'foo-_18+Z.t%c@Bar-teg38w.co',
  'foo@some.reallylongtld'
]

export const badEmails = [
  'foo.bar.com',
  'foo@bar.c',
  'foo@.com',
  'foo@some.really-long-tld-with-dashes'
]
const badDomainChars = ['_', '@', '+', '%']
badDomainChars.forEach((c) => badEmails.push(`foo@bar${c}baz.com`))
