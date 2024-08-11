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

export const goodAWSS3TaBuckenNames = ['foobar', 'foo-bar', 'a-very-long-bucket-name-less-than-63-characters']

export const badAWSS3BuckenNames = [
  'ab',
  '192.168.8.20',
  'foo_bar',
  'adjacent..periods',
  'xn--foo',
  'sthree-foo',
  'foo-s3alias',
  'foo--ol-s3'
]

export const badAWSS3TaBuckenNames = badAWSS3BuckenNames.concat([
  'foo.bar',
  //       10        20        30        40        50        60
  '1234567890123456789012345678901234567890123456789012345678901234'
])
export const goodAWSS3BuckenNames = goodAWSS3TaBuckenNames.concat(['foo.bar'])
