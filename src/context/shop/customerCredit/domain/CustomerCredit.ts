import { AggregateRoot } from '../../../shared/domain/AggregateRoot'
import { CustomerId } from '../../../shared/domain/CustomerId'
import { CustomerCredit } from '../../../shared/domain/CustomerCredit'

export class Customer extends AggregateRoot {
  readonly id: CustomerId
  private credit: CustomerCredit

  constructor (
    id: CustomerId,
    credit: CustomerCredit,
  ) {
    super()
    this.id = id
    this.credit = credit
  }

  toPrimitives () {
    return {
      id: this.id.value,
      credit: this.credit.value,
    }
  }
}
