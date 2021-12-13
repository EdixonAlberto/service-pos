import { Request, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

export function notFound(req: Request, _, next: NextFunction): void {
  next(<TErrorResponse>{
    status: StatusCodes.NOT_FOUND,
    name: 'Route Error',
    message: `Route '${req.originalUrl}' not found`
  })
}
