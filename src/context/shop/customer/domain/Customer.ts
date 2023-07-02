import { AggregateRoot } from '../../../shared/domain/AggregateRoot'
import { CustomerCreatedDate } from './CustomerCreatedDate'
import { CustomerId } from '../../../shared/domain/CustomerId'
import { CustomerName } from './CustomerName'
import { CustomerEmail } from './CustomerEmail'
import { CustomerCredit } from '../../../shared/domain/CustomerCredit'

export class Customer extends AggregateRoot {
  readonly id: CustomerId
  readonly email: CustomerEmail
  readonly name: CustomerName
  private credit: CustomerCredit
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

  public getCredit(): number {
    return this.credit.value
  }

  public addCredit(credit: number) {
    this.credit = new CustomerCredit(credit)
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
