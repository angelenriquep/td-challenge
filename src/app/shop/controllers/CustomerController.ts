import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { Controller } from './Controller'
import {container} from '../dependency-injection';

const customerCreator = container.get('Shop.Customer.application.CustomerCreator');
const customerFinder = container.get('Shop.Customer.application.CustomerFinder');
const customerRemover = container.get('Shop.Customer.application.CustomerRemover');
const customerUpdater = container.get('Shop.Customer.application.CustomerUpdater');
export default class CustomerController implements Controller {
  async createRecord (req: Request, res: Response) {
    const { name, email } = req.body

    const record = await customerCreator.run(name, email)

    res.status(httpStatus.OK).send(record)
  }

  async getAllRecords (_req: Request, res: Response) {
    const records = await customerFinder.run()

    res.status(httpStatus.OK).send(records)
  }

  async getRecordById (req: Request, res: Response) {
    const { id } = req.params

    const record = await customerFinder.run(id)

    res.status(httpStatus.OK).send(record)
  }

  async removeRecord (req: Request, res: Response) {
    const { id } = req.params

    await customerRemover.run(id)

    res.status(httpStatus.OK).send()
  }

  async updateRecord (req: Request, res: Response) {
    const {id, name, email, createdDate } = req.body

    const record = await customerUpdater.run(id, name, email, createdDate)

    res.status(httpStatus.OK).send(record)
  }

  async addCredit (req: Request, res: Response) {
    const { id } = req.params
    const { credit } = req.body

    await customerUpdater.addCreadit(id, credit)

    res.status(httpStatus.OK).send()
  }
}
