import { AggregateRoot } from '../../../shared/domain/AggregateRoot'
import { CustomerCreatedDate } from './CustomerCreatedDate'
import { CustomerId } from '../../../shared/domain/CustomerId'
import { CustomerName } from './CustomerName'
import { CustomerEmail } from './CustomerEmail'
import { CustomerCredit } from './CustomerCredit'

export class Customer extends AggregateRoot {
  readonly id: CustomerId
  readonly email: CustomerEmail
  readonly name: CustomerName
  readonly credit: CustomerCredit
  readonly createdDate: CustomerCreatedDate

  constructor (
    id: CustomerId,
    name: CustomerName,
    email: CustomerEmail,
    credit: CustomerCredit,
    createdDate: CustomerCreatedDate,
  ) {
    super()
    this.id = id
    this.name = name
    this.email = email
    this.credit = credit
    this.createdDate = createdDate
  }

  toPrimitives () {
    return {
      id: this.id.value,
      name: this.name.value,
      email: this.email.value,
      credit: this.credit.value,
      createdDate: this.createdDate.value
    }
  }
}
