import { Customer } from '../domain/Customer'
import { CustomerId } from '../../../shared/domain/CustomerId'
import { CustomerEmail } from '../domain/CustomerEmail'
import { CustomerName } from '../domain/CustomerName'
import { CustomerCreatedDate } from '../domain/CustomerCreatedDate'
import { CustomerCredit } from '../domain/CustomerCredit'
import CustomerRepository from '../domain/CustomerRepository'

export default class CustomerUpdater {
  constructor (private readonly repository: CustomerRepository) { }

  async run (id: string, name: string, email: string, credit: number, createdDate?: string) {
    const customer = new Customer(
      new CustomerId(id),
      new CustomerName(name),
      new CustomerEmail(email),
      new CustomerCredit(credit),
      new CustomerCreatedDate(createdDate)
    )

    const record = await this.repository.update(customer)
    
    return record.toPrimitives()
  }
}
