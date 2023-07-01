import bodyParser from 'body-parser'
import errorHandler from 'errorhandler'
import express, { Request, Response } from 'express'
import Router from 'express-promise-router'
import helmet from 'helmet'
import * as http from 'http'
import httpStatus from 'http-status'
import Logger from '../../context/shared/domain/Logger'
import { registerRoutes } from './routes'
import cors from 'cors'
import container from './dependency-injection';

// Use compression in the LB
export class Server {
  private readonly express: express.Express
  readonly port: string
  private readonly logger: Logger
  httpServer?: http.Server

  constructor (port: string) {
    this.port = port
    this.logger = container.get('Shared.Logger');
    this.express = express()
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(helmet.xssFilter())
    this.express.use(helmet.noSniff())
    this.express.use(helmet.hidePoweredBy())
    this.express.use(helmet.frameguard({ action: 'deny' }))

    const router = Router()
    router.use(cors())
    router.use(errorHandler())
    this.express.use(router)
    registerRoutes(router)

    router.use((err: Error, _req: Request, res: Response, _next: Function): void => {
      this.logger.error(err)
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    })
  }

  async listen(): Promise<void> {
    return await new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        this.logger.info(
          `Backend App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`
        )
        this.logger.info('Press CTRL-C to stop\n')
        resolve()
      })
    })
  }

  getHTTPServer() {
    return this.httpServer
  }

  async stop(): Promise<void> {
    return await new Promise((resolve, reject) => {
      if (this.httpServer != null) {
        this.httpServer.close(error => {
          if (error != null) {
            return reject(error)
          }
          return resolve()
        })
      }

      return resolve()
    })
  }
}
