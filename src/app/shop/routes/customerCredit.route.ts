import { Express } from 'express'
import { container } from '../dependency-injection'
import { ControllerCredit } from '../controllers/ControllerCredit'

export const register = (app: Express) => {
  const customerCreditController: ControllerCredit = container.get('Apps.Shop.controllers.CustomerCreditController')

  app.post('/v1/customerCredit/:id/addCredit', customerCreditController.addCredit)
}
