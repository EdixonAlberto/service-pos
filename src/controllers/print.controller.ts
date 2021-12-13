import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { resolve } from 'path'

import { PrinterService } from '~SERVICES/Printer.service'

async function printController(req: Request, res: Response, next: NextFunction): Promise<void> {
  const printerService = new PrinterService()

  try {
    const response = await printerService.print({
      document: resolve('note.txt')
    })

    res.status(StatusCodes.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export { printController }
