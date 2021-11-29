import { POS } from 'transbank-pos-sdk'

class TransbackSDKService {
  private pos = new POS()

  public async connect(): Promise<void> {
    this.pos.setDebug(true)

    // Esta línea permite busca en todos los puertos si existe uno que tenga conctado un equipo POS
    // y se intenta conectar con el primero que encuentra.
    this.pos
      .autoconnect()
      .then((port) => {
        if (port === false) {
          console.log('No se encontró nigún POS conectado en modo integrado')
        }

        console.log('Connected to PORT: ', port.path)
        this.pos.loadKeys() // Cargar llaves
      })
      .catch((err) => {
        console.log('Ocurrió un error inesperado', err)
      })
  }
}

export { TransbackSDKService }
