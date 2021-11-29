type TSale = {
  body: {
    amount: number
    code: string
    error?: boolean // TODO: propiedad temporal para probar el mensaje de error
  }
  response: TSaleTransaction
}
