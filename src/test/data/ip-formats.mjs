import { goodIPs } from './ips'

export const goodIPFormats = [
  ...goodIPs,
  '255.255.255.255',
  '0.0.0.0'
]

export const badIPFormats = [
  '1.1.1.1.1',
  '256.0.0.1'
]
