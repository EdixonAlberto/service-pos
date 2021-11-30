import { Request, NextFunction } from 'express'

export function requestHandler(req: Request, _, next: NextFunction): void {
  if (global.config.modeDev) {
    console.log(`>> HTTP: ${req.method} ${req.originalUrl}`)
  }
  next()
}
