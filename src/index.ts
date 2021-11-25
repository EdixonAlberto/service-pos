import { ServerService } from '~SERVICES/Server.service'

async function main(): Promise<void> {
  try {
    const server = new ServerService()
    server.start()
  } catch (error) {
    console.error(error)
  }
}

main()
