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

export const validHsl3 = [
  'hsl(30, 30%, 0%)',
  'hsl(30deg, 30%, 0%)',
  'hsl(30,30%,0%)',
  'hsl(0, 0%, 0%)',
  'hsl(360, 100%, 100%)',
  'hsla(30, 30%, 0%, 50%)',
  'hsla(30deg, 30%, 0%, 30%)',
  'hsla(30,30%,0%,30%)',
  'hsla(0, 0%, 0%, 0%)',
  'hsla(360, 100%, 100%, 30%)',
]

export const validHsl = validHsl3.concat([
  'hsl(30, 30%, 0%, 30%)',
  'hsla(30, 30%, 0%)',
  'hsl(2rad, 30%, 0%)',
  'hsl(2grad, 30%, 0%)',
  'hsl(2turn, 30%, 0%)',
  'hsl(2.56rad, 30.8%, 0.101%)',
  'hsl(-2e+3.8rad, 30%, 0%)',
])

export const invalidHsl = [
  'hsl(2turn, 30%, 0)',
  'hsl(30, 300%, 0%)',
  'hsl(30, 030%, 0%)',
  'hsl(30, -30%, 0%)',
]

export const invalidHsl3 = invalidHsl.concat([
  'hsl(361, 30%, 0%)',
  'hsl(30, 30%, 0.5%)',
  'hsl(-30, 30%, 30%)',
  'hsl(30,30%,0%,30%)',
  'hsla(30,30%,0%)',
])
