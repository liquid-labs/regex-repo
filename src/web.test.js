import { groupTest } from './testlib'
import * as regex from './index'
import { goodUrls, badUrls } from './test-data/urls'
import { goodEmails, badEmails } from './test-data/emails'

groupTest(regex.url, goodUrls, badUrls)
groupTest(regex.email, goodEmails, badEmails)
