export const validMilTimes = [
  '2400',
  '0000',
  '0130'
]

export const invalidMilTimes = [
  '2500',
  '2060',
  '300'
]

export const validTimes = [
  '12:00 AM',
  '12:00:39 PM',
  '2:00:39.383 PM'
]

export const invalidTimes = [
  '13:00 AM',
  '5:60 PM',
  '7:00'
]

export const valid24HrTimes = [
  '24:00',
  '24:00:00',
  '12:00',
  '12:00:32.928'
]

export const invalid24HrTimes = [
  '24:01',
  '25:00',
  '12:60',
  '12:00:60',
  '12:00:10.'
]
