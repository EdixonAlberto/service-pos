import { Request, Response, NextFunction } from 'express'

async function saleController(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    res.status(200).json('OK')
  } catch (error) {
    next(error)
  }
}

export { saleController }
