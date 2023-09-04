import { groupTest } from './lib'
import * as regex from './index'
import { goodUrls, badUrls } from './test-data/urls'
import { goodEmails, badEmails } from './test-data/emails'

groupTest(regex.url, goodUrls, badUrls)
groupTest(regex.email, goodEmails, badEmails)
groupTest(regex.emailEncodedOrNot,
  goodEmails.map((e) => e.replace('@', '%40')),
  badEmails.map((e) => e.replace('@', '%40')))
