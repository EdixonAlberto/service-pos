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
    port: Number(ENV.PORT) || 5000,
    modeDev: NODE_ENV === 'development',
  }

  global.config = _config
}
