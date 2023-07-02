import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { ControllerCredit } from './ControllerCredit'
import {container} from '../dependency-injection';

const customerCreditCreated = container.get('Shop.CustomerCredit.application.CustomerCreditCreated');

export default class CustomerController implements ControllerCredit {
  async addCredit (req: Request, res: Response) {
    const { id } = req.params
    const { credit } = req.query

    const customer = await customerCreditCreated.run(id, credit)

    res.status(httpStatus.OK).send(customer)
  }
}
