import { Request, NextFunction } from 'express'

export function notFound(req: Request, _, next: NextFunction): void {
  req.statusCode = 404

  next({
    name: 'RouteError',
    message: `Route '${req.originalUrl}' not found`
  })
}
