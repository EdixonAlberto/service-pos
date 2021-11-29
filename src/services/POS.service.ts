import { POS } from 'transbank-pos-sdk'

class POSService {
  private pos: POS = new POS()
  readonly PORT = global.config.portPos

  constructor() {}

  /**
   * Conectar al puerto del POS establecido, en cado de no establecer uno, busca en todos los
   * puertos disponibles uno que tenga conectado un equipo POS y realiza el intento de conexion con el primero que
   * encuentre.
   */
  public async connect(portName = this.PORT): Promise<boolean> {
    let response: { path: string } = { path: '' }
    this.pos.setDebug(true)

    try {
      response = portName ? await this.pos.connect(portName) : await this.pos.autoconnect()

      if (response) {
        console.log('>> POS: connected to PORT:', portName || response.path)
        this.pos.loadKeys() // Cargar llaves
        return true
      } else {
        console.log('>> WARN-POS-CONNECT: no mode found any POS connected in integrated')
        return false
      }
    } catch (error) {
      console.error('!! ERROR-POS-CONNECT:', (error as Error).message)
      return false
    }
  }

  /**
   * Desconectar (cerrar conexión serial) con el POS actualmente conectado.
   */
  public async disconnect(): Promise<boolean> {
    let connected = this.pos.isConnected() as boolean

    if (connected) {
      try {
        await this.pos.disconnect()
        console.log('>> POS: disconnect successfully')
        return true
      } catch (error) {
        console.error('!! ERROR-POS-DISCONNECT:', (error as Error).message)
        return false
      }
    } else {
      console.error('>> ERROR-POS-DISCONNECT: not exist any POS connected')
      return false
    }
  }

  /**
   * Solicitar la ejecución de una venta.
   */
  public async sell(amount: number, ticket: string): Promise<TSaleTransaction | string> {
    try {
      const response: TSaleTransaction = await this.pos.sale(amount, ticket)
      return response
    } catch (error) {
      console.error('!! ERROR-POS-SELL:', (error as Error).message)
      return (error as Error).message
    }
  }
}

export { POSService }
