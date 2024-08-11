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
import { ipAddressREString } from './network'

const invalidS3Partials = `(?!^${ipAddressREString}|^xn--|^sthree-|.+-s3alias$|.+--ol-s3$)`
// const invalidS3Partials = `(?!^${ipAddressREString}|^xn--|^sthree-)`

export const awsS3TABucketNameREString = invalidS3Partials + '^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$'
// AWS: Matches (most) S3 Transfer Acceleration compatible S3 bucket name. Note `awsS3TABucketNameREString` cannot be used for partial matches.
export const awsS3TABucketNameRE = new RegExp(awsS3TABucketNameREString)

export const awsS3BucketNameREString = invalidS3Partials + '^[a-z0-9](?:\\.?[a-z0-9-]+)+[a-z0-9]$'
// export const awsS3BucketNameREString = '^[a-z0-9](?:\\.?[a-z0-9-]+)+[a-z0-9]$'
// AWS: Matches (most) valid S3 bucket name. Note `awsS3BucketNameREString` cannot be used for partial matches. Does not enforce 63 character limit.
export const awsS3BucketNameRE = new RegExp(awsS3BucketNameREString)
