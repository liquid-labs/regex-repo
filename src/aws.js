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
/** @module AWS */
import { ipAddressReString } from './network'

const invalidS3Partials = `(?!^${ipAddressReString}|^xn--|^sthree-|.+-s3alias$|.+--ol-s3$)`

export const awsS3TaBucketNameReString = invalidS3Partials + '^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$'
/**
 * Matches (most) S3 Transfer Acceleration compatible S3 bucket name. Note `awsS3TaBucketNameReString` cannot be used 
 * for partial matches.
 */
export const awsS3TaBucketNameRe = new RegExp(awsS3TaBucketNameReString)

export const awsS3BucketNameReString = invalidS3Partials + '^[a-z0-9](?:\\.?[a-z0-9-]+)+[a-z0-9]$'
/**
 * Matches (most) valid S3 bucket name. Note `awsS3BucketNameReString` cannot be used for partial matches. Does not 
 * enforce 63 character limit.
 */
export const awsS3BucketNameRe = new RegExp(awsS3BucketNameReString)
