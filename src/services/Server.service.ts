import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

import httpRoutes from '~ROUTES/http.routes'

class ServerService {
  private app = express()
  private httpServer = createServer(this.app)
  readonly PORT: number = Number(process.env.PORT) || 3000

  constructor() {
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.app.use('/', (req, _, next) => {
      console.log(`>> ${req.method}: ${req.url}`)
      next()
    })
  }

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
    console.log(`>> WebSocket OK`)
  }

  public start(): void {
    this.httpServer.listen(this.PORT, () => {
      console.log(`>> Server OK: litening on port ${this.PORT}`)
      this.socket()
    })
  }
}

export { ServerService }
