
import { CustomerCounterId } from '../domain/CustomerCounterId'
import { CustomerCounterNumber } from '../domain/CustomerCounterNumber'
import { CustomerCredit } from '../domain/CustomerCredit'
import {CustomerCreditRepository} from '../domain/CustomerCreditRepository'
import {CustomerId} from '../../../shared/domain/CustomerId'
import {CustomerCounterNumber} from '../domain/CustomerCounterNumber'

export default class CustomerCreditIncrementer {
  constructor (private readonly repository: CustomerCreditRepository) { }

  async run (customerId: CustomerId, credit: CustomerCounterNumber) {
    const customer = new CustomerCredit(
      new CustomerCounterId(customerId),
      new CustomerCounterNumber(credit),
    )

    const record = await this.repository.save(customer)

    return record.toPrimitives()
  }
}
