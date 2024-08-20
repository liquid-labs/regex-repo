/*
Copyright 2023 Liquid Labs LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { groupTest } from './lib/test-lib'
import * as regex from '../aws'
import {
  goodAWSS3TaBuckenNames,
  badAWSS3TaBuckenNames,
  goodAWSS3BuckenNames,
  badAWSS3BuckenNames,
} from './data/aws-s3-bucket-names'

groupTest(regex.awsS3TaBucketNameRe, goodAWSS3TaBuckenNames, badAWSS3TaBuckenNames, 'AWS S3Ta bucket RE')
// The AWS S3Ta bucket names test strings don't support partial matches

groupTest(regex.awsS3BucketNameRe, goodAWSS3BuckenNames, badAWSS3BuckenNames, 'AWS S3 bucket RE')
// The AWS S3 bucket names test strings don't support partial matches
