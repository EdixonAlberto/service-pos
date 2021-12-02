export async function loadConfig(): Promise<void> {
  const { resolve } = await import('path')
  const { config } = await import('dotenv')
  const NODE_ENV = process.env.NODE_ENV as TEnv

  const result = config({ path: resolve('env', `${NODE_ENV}.env`) })

  if (result.error) throw new Error(`!! ERROR-ENV: ${result.error.message}`)
  else console.log(`>> ENV: environment "${NODE_ENV}" loaded successfully`)

  const ENV: NodeJS.ProcessEnv = process.env

  const _config: TConfig = {
    modeDev: NODE_ENV === 'development',
    portHTTP: Number(ENV.PORT_HTTP) || 3000,
    portWS: Number(ENV.PORT_WEBSOCKET) || 5000,
    portPOS: ENV.PORT_POS || null,
    whiteList: ENV.WHITE_LIST?.split(',') || []
  }

  global.config = _config
}
