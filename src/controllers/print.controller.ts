import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { resolve } from 'path'

import { print } from '~UTILS/print.util'

async function printController(req: Request, res: Response, next: NextFunction): Promise<void> {
  const printer = ''
  const pathText = resolve('note.txt')

  try {
    // const response = await print(`lp -d “${printer}” ${pathText}`) // TODO:
    const response = await print(`lpstat -a | awk '{print $1}'`)

    if (response) {
      res.status(StatusCodes.OK).json({
        response
      })
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({
        response
      })
    }
  } catch (error) {
    next(error)
  }
}

export { printController }
