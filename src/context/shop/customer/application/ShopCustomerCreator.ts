import { ShopCustomer } from '../domain/ShopCustomer'
import { ShopCustomerId } from '../domain/ShopCustomerId'
import { ShopCustomerEmail } from '../domain/ShopCustomerEmail'
import { ShopCustomerName } from '../domain/ShopCustomerName'
import { ShopCustomerRepository } from '../domain/ShopCustomerRepository'

export class ShopCustomerCreator {
  constructor (private readonly shopCustomerRepository: ShopCustomerRepository) { }

  async run (name: string, email: string) {
    const customer = new ShopCustomer(
      new ShopCustomerId(),
      new ShopCustomerName(name),
      new ShopCustomerEmail(email)
    )

    return await this.shopCustomerRepository.save(customer)
  }
}
