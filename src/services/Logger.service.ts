import fs from 'fs/promises'

class LoggerService {
  public async log(message: string): Promise<void> {
    const logFile = await fs.open('./error.log', 'a')
    await logFile.write(message)
    await logFile.close()
  }
}

export { LoggerService }
