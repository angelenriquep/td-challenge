import { Express } from 'express'
import container from '../dependency-injection';
import CustomerController from '../controllers/CustomerController'

export const register = (app: Express) => {
  // Get a single instance
  const customerController: CustomerController = container.get(
    'Apps.Shop.controllers.CustomerController'
  );

  console.log(customerController);

  app.get('/v1/customers')
  app.post('/v1/customer/:id', customerController.createRecord)
  app.post('/v1/customers/:id')
  app.patch('/v1/customer/:id')
  app.delete('/v1/customer/:id')
}
