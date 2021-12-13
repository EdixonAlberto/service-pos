import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction): void {
  // Error handling is delegated to Express
  if (res.headersSent) {
    console.error('!! ERROR-HANDLING-EXPRESS', error)
    return next(error)
  }

  // Error handling personalized
  const errorResponse =
    error instanceof Error || typeof error === 'object'
      ? {
          type: error.name,
          message: error.message
        }
      : {
          type: 'Error',
          message: error
        }

  res.status(req.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: errorResponse
  })
}
