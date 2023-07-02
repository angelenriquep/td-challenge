import { Customer } from '../domain/Customer'
import { CustomerId } from '../../../shared/domain/CustomerId'
import { CustomerEmail } from '../domain/CustomerEmail'
import { CustomerName } from '../domain/CustomerName'
import { CustomerCreatedDate } from '../domain/CustomerCreatedDate'
import { CustomerCredit } from '../../../shared/domain/CustomerCredit'
import CustomerRepository from '../../../shared/domain/CustomerRepository'
import { Criteria } from '../../../shared/domain/Criteria'

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

  // Idempotency ensured since we don increment, we just update hard
  // Side effect! State altered!
  async addCredit(id: string, credit: number): Promise<void> {
    const criteria = new Criteria([{ property: 'id', operator: '=', value: id }])
      
    const customer = await this.repository.matching(criteria);
    
    console.log(id, credit, customer)
    if (!customer) {
      throw new Error (`No customer found for id <${id}>`)
    }

    if (customer.length > 1) {
      throw new Error (`Integrity error found for customer id <${id}>`)
    }

    customer[0].addCredit(credit)

    await this.repository.update(customer[0]);
  }
}
