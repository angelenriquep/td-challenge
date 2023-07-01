import { Express } from 'express'
import {container} from '../dependency-injection';
import {Controller} from '../controllers/Controller'

export const register = (app: Express) => {
  // Get a single instance
  const customerController: Controller = container.get('Apps.Shop.controllers.CustomerController');

  app.get('/v1/customers', customerController.getAllRecords)
  app.post('/v1/customer', customerController.createRecord)
  app.post('/v1/customers/:id',  customerController.getRecordById)
  app.post('/v1/customer/:id/addCredit', customerController.addCredit)
  app.put('/v1/customer',  customerController.updateRecord)
  app.delete('/v1/customer/:id',  customerController.removeRecord)
}