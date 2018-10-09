export const goodEmails = [
  'foo@bar.com',
  'foo@bar.org',
  'foo@bar.xqc',
  'foo@baz.bar.xqc',
  'foo-_18+Z.t%c@Bar-teg38w.co'
]

export const badEmails = [
  'foo.bar.com',
  'foo@bar.c',
  'foo@.com'
]
const badDomainChars = ['_', '@', '+', '%']
badDomainChars.forEach((c) => badEmails.push(`foo@bar${c}baz.com`))
