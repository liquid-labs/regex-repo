export const goodIPV6s = [
  '1:2:3:4:5:6:7:8',
  '1::',
  '1:2:3:4:5:6:7::',
  '1::8',
  '1:2:3:4:5:6::8',
  '1::7:8',
  '1:2:3:4:5::7:8',
  '1:2:3:4:5::8',
  '1::6:7:8',
  '1:2:3:4::6:7:8',
  '1:2:3:4::8',
  '1::5:6:7:8',
  '1:2:3::5:6:7:8',
  '1:2:3::8',
  '1::4:5:6:7:8',
  '1:2::4:5:6:7:8',
  '1:2::8',
  '1::3:4:5:6:7:8',
  '::2:3:4:5:6:7:8',
  '::2:3:4:5:6:7:8',
  '::8',
  '::',
  'fe80::7:8%eth0',
  'fe80::7:8%1',
  '::255.255.255.255',
  '::ffff:255.255.255.255',
  '2001:db8:3:4::192.0.2.33',
  '64:ff9b::192.0.2.33'
]

export const badIPV6s = [
  'foo'
]
