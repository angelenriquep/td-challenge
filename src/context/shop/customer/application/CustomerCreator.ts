import { Customer } from '../domain/Customer'
import { CustomerId } from '../../../shared/domain/CustomerId'
import { CustomerEmail } from '../domain/CustomerEmail'
import { CustomerName } from '../domain/CustomerName'
import { CustomerCreatedDate } from '../domain/CustomerCreatedDate'
import { CustomerCredit } from '../domain/CustomerCredit'
import CustomerRepository from '../domain/CustomerRepository'

export default class CustomerCreator {
  constructor (private readonly repository: CustomerRepository) { }

  async run (name: string, email: string, credit: number) {
    const customer = new Customer(
      new CustomerId(),
      new CustomerName(name),
      new CustomerEmail(email),
      new CustomerCredit(credit),
      new CustomerCreatedDate()
    )

    const record = await this.repository.save(customer)

    return record.toPrimitives()
  }
}
