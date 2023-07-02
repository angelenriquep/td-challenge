import winston, { Logger as WinstonLoggerType } from 'winston'

export interface Logger {
  debug: (message: string) => void
  error: (message: string | Error) => void
  info: (message: string) => void
}

enum Levels {
  DEBUG = 'debug',
  ERROR = 'error',
  INFO = 'info'
}

class WinstonLogger implements Logger {
  private readonly logger: WinstonLoggerType

  constructor () {
    this.logger = winston.createLogger({
      silent: process.env.NODE_ENV === 'test',
      format: winston.format.combine(
        winston.format.prettyPrint(),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}` + (info.splat !== undefined ? `${info.splat}` : ' '))
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: `logs/${Levels.DEBUG}.log`, level: Levels.DEBUG }),
        new winston.transports.File({ filename: `logs/${Levels.ERROR}.log`, level: Levels.ERROR }),
        new winston.transports.File({ filename: `logs/${Levels.INFO}.log`, level: Levels.INFO })
      ]
    })
  }

  debug (message: string) {
    this.logger.debug(message)
  }

  error (message: string | Error) {
    this.logger.error(message)
  }

  info (message: string) {
    this.logger.info(message)
  }
}

export default WinstonLogger
