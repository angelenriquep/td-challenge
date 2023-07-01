import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { Controller } from './Controller'

export default class CustomerController implements Controller {
  async createRecord (_req: Request, res: Response) {
    const { body } = _req

    console.log(body)

    res.status(httpStatus.OK).send()
  }
}
