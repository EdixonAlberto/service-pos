import { ServerService } from '~SERVICES/Server.service'
import { loadConfig } from '~UTILS/config.util'

async function main(): Promise<void> {
  try {
    await loadConfig()

    const server = new ServerService()
    server.start()
  } catch (error) {
    console.error((error as Error).message)
  }
}

main()
