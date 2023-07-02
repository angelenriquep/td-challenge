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
    const { name, email, credit } = req.body

    const record = await customerCreator.run(name, email, credit)

    res.status(httpStatus.OK).send(record)
  }

  async getRecordByCriteria (req: Request, res: Response) {
    const { criteria } = req.body

    const record = await customerFinder.run(criteria)

    res.status(httpStatus.OK).send(record)
  }

  async removeRecord (req: Request, res: Response) {
    const { id } = req.params

    await customerRemover.run(id)

    res.status(httpStatus.OK).send()
  }

  async updateRecord (req: Request, res: Response) {
    const {id, name, email, credit, createdDate } = req.body

    const record = await customerUpdater.run(id, name, email, credit, createdDate)

    res.status(httpStatus.OK).send(record)
  }
}
