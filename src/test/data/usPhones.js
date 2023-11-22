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

export const goodUsPhones = [
  '1-512-567-8901',
  '512-567-8901',
  '+1-512-567-8901',
  '+1 512-567-8901',
  '1.512.567.8901',
  '512.567.8901',
  '5125678901',
  '15125678901'
]

export const badUsPhones = [
  // extra digits
  '1-512-567-89019',
  '1-5112-567-8901',
  '1-512-5867-8901',
  '11-512-586-8901',
  '5112-567-8901',
  // missing digits
  '1-52-567-8901',
  '1-512-56-8901',
  '1-512-567-890',
  '12-567-8901',
  '512-57-8901',
  '512-567-801',
  '5a2-567-8901',
  '512-5b7-8901',
  '512-567-89c1'
]
