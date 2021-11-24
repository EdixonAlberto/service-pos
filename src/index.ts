import { LoggerService } from './services/Logger.service'

const logger = new LoggerService()

logger.log(`
fecha       |  device     |  error
24/11/2021  |  impresora  |  rodillo atascado
`)
