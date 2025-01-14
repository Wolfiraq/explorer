import Client, { Network } from '@helium/http'

export const TAKE_MAX = 100000

const client = new Client(Network.production, { retry: 0 })

export default client
