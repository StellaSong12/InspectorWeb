import { darkModeMatcher } from './utils'

export const settings = {
  dark_mode: darkModeMatcher ? 'auto' : 'dark',
  network: {
    sleep: false,
    sort_params: true,
    limit: '250'
  },
  port: '30006',
  adapter_blacklist: 'pdp_ip0 vboxnet4 lo0',
  version: 'v0.1.0',
}
