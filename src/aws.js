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

// credit to: https://stackoverflow.com/a/50484916/929494
export const awsS3TABucketNameREString = '(?!(^xn--|.+-s3alias$))^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$'
// AWS: Matches S3 Transfer Acceleration compatible S3 bucket name. Note `awsS3TABucketNameREString` cannot be used for partial matches.
export const awsS3TABucketNameRE = new RegExp(awsS3TABucketNameREString)

// credit to: https://stackoverflow.com/a/50484916/929494
export const awsS3BucketNameREString = '(?!(^((2(5[0-5]|[0-4][0-9])|[01]?[0-9]{1,2})\\.){3}(2(5[0-5]|[0-4][0-9])|[01]?[0-9]{1,2})$|^xn--|.+-s3alias$))^[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$'
// AWS: Matcehs valid S3 bucket name. Note `awsS3BucketNameREString` cannot be used for partial matches.
export const awsS3BucketNameRE = new RegExp(awsS3BucketNameREString)
