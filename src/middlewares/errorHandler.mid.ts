import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction): void {
  if (res.headersSent) {
    console.error('!! ERROR-HANDLING-EXPRESS', error)
    // Error handling is delegated to Express
    return next(error)
  }

  // Error handling personalized
  res.status(req.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: {
      type: error.name,
      message: error.message
    }
  })
}
