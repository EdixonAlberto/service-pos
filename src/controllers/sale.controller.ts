import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

async function saleController(req: Request, res: Response, next: NextFunction): Promise<void> {
  const body = req.body as TSale['body']
  const date: string = new Date().toLocaleString('es')

  try {
    if (body?.error) {
      return next(<TErrorResponse>{
        status: StatusCodes.BAD_REQUEST,
        name: 'Request Error',
        message: 'error message'
      })
    }

    res.status(StatusCodes.OK).json(<TSale['response']>{
      Function: 210,
      Response: 'Aprobado',
      'Commerce Code': 550062700310,
      'Terminal Id': 'ABC1234C',
      Ticket: body.code,
      'Autorization Code': 'XZ123456',
      Ammount: body.amount,
      'Shares Number': 3,
      'Shares Amount': 5000,
      'Last 4 Digits': 6677,
      'Operation Number': 60,
      'Card Type': 'CR',
      'Accounting Date': date,
      'Account Number': '30000000',
      'Card Brand': 'AX',
      'Real Date': date,
      'Employee Id': 1,
      Tip: 1500
    })
  } catch (error) {
    next(error)
  }
}

export { saleController }
