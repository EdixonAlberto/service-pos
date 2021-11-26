import { Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

export function errorHandler(error: Error, _, res: Response, next: NextFunction): void {
  if (res.headersSent) {
    console.error('>> HANDLING_EXPRESS')
    // Error handling is delegated to Express
    return next(error)
  }

  // Error handling personalized
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: error.message
  })
}
