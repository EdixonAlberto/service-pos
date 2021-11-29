export async function loadConfig(): Promise<void> {
  const { resolve } = await import('path')
  const { config } = await import('dotenv')
  const NODE_ENV = process.env.NODE_ENV as TEnv

  const result = config({ path: resolve('env', `${NODE_ENV}.env`) })

  if (NODE_ENV === 'development') {
    if (result.error) throw result.error
    else console.log('>> ENV: environment loaded successfully')
  }

  const ENV: NodeJS.ProcessEnv = process.env

  const _config: TConfig = {
    portServer: Number(ENV.PORT_SERVER) || 5000,
    portPos: ENV.PORT_POS || null,
    modeDev: NODE_ENV === 'development'
  }

  global.config = _config
}
