import { POS } from 'transbank-pos-sdk'

class TransbackSDKService {
  private pos = new POS()

  /** CONNECT POS
   * Este metodo busca en todos los puertos uno que tenga conctado un equipo POS
   * y realiza el intento de conexion con el primero que encuentra.
   */
  public async connect(): Promise<void> {
    this.pos.setDebug(true)

    try {
      const port = await this.pos.autoconnect()

      if (port === false) {
        console.log('No se encontró nigún POS conectado en modo integrado')
      }

      console.log('Connected to PORT: ', port.path)
      this.pos.loadKeys() // Cargar llaves
    } catch (error) {
      console.log('Ocurrió un error inesperado', error)
    }
  }
}

export { TransbackSDKService }
