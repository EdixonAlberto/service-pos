import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { readFileSync } from 'fs'
import { resolve } from 'path'

async function statusController(req: Request, res: Response, next: NextFunction): Promise<void> {
  const pkg = JSON.parse(readFileSync(resolve('package.json'), 'utf8'))

  res.status(StatusCodes.OK).json({
    name: pkg.name,
    version: pkg.version,
    currentDate: new Date().toISOString()
  })
}

export { statusController }
