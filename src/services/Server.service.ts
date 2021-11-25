import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

import httpRoutes from '~ROUTES/http.routes'

class ServerService {
  private app = express()
  private httpServer = createServer(this.app)

  constructor() {
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {}

  private routes(): void {
    this.app.use('/', httpRoutes)
  }

  private socket(): void {
    const io = new Server(this.httpServer, {
      serveClient: false,
      pingInterval: 10000,
      pingTimeout: 5000,
      cookie: false,
      transports: ['websocket']
    })

    io.on('connection', () => {})
    console.log(`>> Socket OK`)
  }

  public start(): void {
    this.httpServer.listen(process.env.PORT || 3000)
    this.socket()
    console.log(`>> Server OK`)
  }
}

export { ServerService }
