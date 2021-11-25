import { Request, Response, NextFunction } from 'express'

async function saleController(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
  } catch (error) {
    next(error)
  }
}

export { saleController }
