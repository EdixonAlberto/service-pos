import express from 'express'
import { Server, Socket } from 'socket.io'

import { notFound, errorHandler, requestHandler, corsHandler } from '~MIDDLEWARES'
import httpRoutes from '~ROUTES/http.routes'

class ServerService {
  readonly PORT_HTTP = global.config.portHTTP
  readonly PORT_WS = global.config.portWS
  private app = express()

  constructor() {
    this.middlewaresIN()
    this.routes()
    this.middlewaresOUT()
  }

  private middlewaresIN(): void {
    this.app.use('/', requestHandler)
    this.app.use(corsHandler())
    this.app.use(express.json())
  }

  private routes(): void {
    this.app.use('/pos', httpRoutes)
  }

  private middlewaresOUT(): void {
    this.app.use(notFound)
    this.app.use(errorHandler)
  }

  private socket(): void {
    const io = new Server(this.PORT_WS, {
      serveClient: false,
      pingInterval: 10000,
      pingTimeout: 5000,
      cookie: false,
      transports: ['websocket']
    })

    io.on('connection', (socket: Socket) => {
      console.log(`>> WEB_SOCKET: client connected with id=${socket.id}`)
      // TODO: crear rutas o eventos
    })
    console.log(`>> WEB_SOCKET: listening on ws://localhost:${this.PORT_WS}${io.path()}`)
  }

  public start(): void {
    this.app.listen(this.PORT_HTTP, () => {
      console.log(`>> HTTP: listening on http://localhost:${this.PORT_HTTP}`)
      this.socket()
    })
  }
}

export { ServerService }
