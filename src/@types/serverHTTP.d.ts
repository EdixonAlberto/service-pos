type TSale = {
  body: {
    amount: number
    code: string
    error?: boolean // TODO: propiedad temporal para probar el mensaje de error
  }
  response: {
    Function: number
    Response: string
    'Commerce Code': number
    'Terminal Id': string
    Ticket: string
    'Autorization Code': string
    Ammount: number
    'Shares Number': number
    'Shares Amount': number
    'Last 4 Digits': number
    'Operation Number': number
    'Card Type': string
    'Accounting Date': string
    'Account Number': string
    'Card Brand': string
    'Real Date': string
    'Employee Id': number
    Tip: number
  }
}
