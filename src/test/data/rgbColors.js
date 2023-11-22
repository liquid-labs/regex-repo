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

// partially cribbed from https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
export const validRgb1 = [
  'rgb(1, 2, 3)',
  'rgb(234, 29, 120)',
  'rgb( 234 ,  29 ,120 )',
  'rgb(100%,0%,60%)',
  'rgb(100%, 0%, 60%)'
]
export const validRgba3 = [
  'rgba(1, 2, 3, .4)',
  'rgba(1, 2, 3, .002)',
  'rgba(1, 2, 3, 1)',
  'rgba(1, 2, 3, 40%)',
  'rgba(1, 2, 3, 1%)',
  'rgba(1, 2, 3, 100%)',
  'rgba(234, 29, 120, 1)',
  'rgba( 234 ,  29 ,120,.5 )',
  'rgba(100%, 0%, 60%, 0.4)',
  'rgba(100%, 0%, 60%, 40%)'
]

export const validRgb = validRgb1.concat(validRgba3).concat([
  'rgb(1, 2, 3, .4)',
  'rgba(1, 2, 3)',
  'rgb(255, 0, 153, 100%)',
  'rgb(255, 0, 153, 50.5%)',
  'rgb(255 0 153)',
  'rgb(255 0 153 / 1)',
  'rgb(255 0 153 / 100%)',
  'rgb(255 0 153 / 50.5%)',
  'rgb(255, 0, 153.6, 1)',
  'rgb(100%,0.5%,60.638%)',
  'rgb(100%, 0.5%, 60.638%)',
  'rgba(51, 170, 51, .1)',
  'rgba(51, 170, 51, .4)',
  'rgba(51, 170, 51, .7)',
  'rgba(51, 170, 51,  1)',
  'rgba(51 170 51 / 0.4)',
  'rgba(51 170 51 / 40%)',
  'rgba(51% 17% 51% / 40%)',
  'rgba(51.5% 17.5% 51% / 40.5%)',
  'rgba(255, 0, 153.6, 1)',
  'rgba(100%, 0.5%, 60.863%, 0.4)',
  'rgba(100%, 0.5%, 60.683%, 40.5%)'
  // We don't support exponential notation
  // 'rgba(1e2, .5e1, .5e0, +.25e2%)',
  // 'rgb(1e2, .5e1, .5e0, +.25e2%)',
])

// Note, we swap the order here; validRgb is additive, invalidRgb1 is subtractive
export const invalidRgb = [
  'rgb(101%, 20%, 20%)',
  'rgb(160%, 20%, 20%)',
  'rgb(-234, 29, 120)',
  'rgb(300, 20, 20)',
  'rgb(260, 20, 20)',
  'rgb(256, 20, 20)',
  'rgb(20, 256, 20)',
  'rgba(1, 2, 3, 4, 5)',
  'rgba(234, 29, 120, -89)',
  'rgba(234, 029, 120, 89)',
  'rgba(20, 20, 20, 256)',
  'rgb(100%, 0, 60%)' /* ERROR! Don't mix integers and percentages. */
]

export const invalidRgb1 = invalidRgb.concat([
  'rgb(1, 2, 3, 4)',
  'rgb(234, 29, 120, 29)',
  'rgba(1, 2, 3)',
  'rgb(20, 20, 20, .1)',
  'rgb(20, 20, 20, 10%)',
  'rgb(20%, 20%, 20%, .1)',
  'rgb(20%, 20%, 20%, 10%)',
  'rgb(255, 0, 153.0)' /* ERROR! Don't use fractions. */
])
