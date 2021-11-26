import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

import httpRoutes from '~ROUTES/http.routes'
import { notFound, errorHandler } from '~MIDDLEWARES'

class ServerService {
  private app = express()
  private httpServer = createServer(this.app)
  readonly PORT: number = Number(process.env.PORT) || 3000

  constructor() {
    this.middlewaresIN()
    this.routes()
    this.middlewaresOUT()
  }

  private middlewaresIN(): void {
    this.app.use(express.json())

    this.app.use('/', (req, _, next) => {
      console.log(`>> ${req.method}: ${req.url}`)
      next()
    })
  }

  private routes(): void {
    this.app.use('/pos', httpRoutes)
  }

  private middlewaresOUT(): void {
    this.app.use(notFound)
    this.app.use(errorHandler)
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
    console.log(`>> WEBSOCKET: listening on ws://localhost:${this.PORT}`)
  }

  public start(): void {
    this.httpServer.listen(this.PORT, () => {
      console.log(`>> SERVER_HTTP: listening on http://localhost:${this.PORT}`)
      this.socket()
    })
  }
}

export { ServerService }
