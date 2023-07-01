import {CustomerCounterId}  from './CustomerCounterId'
import {CustomerCounterNumber}  from './CustomerCounterNumber'
import { AggregateRoot } from '../../../shared/domain/AggregateRoot'
import {CustomerId} from '../../../shared/domain/CustomerId'

export class CustomerCredit extends AggregateRoot {
  readonly id: CustomerCounterId;
  private _credit: CustomerCounterNumber;

  constructor(id: CustomerCounterId, credit: CustomerCounterNumber) {
    super();
    this.id = id;
    this._credit = credit;
  }

  public get credit(): CustomerCounterNumber {
    return this._credit;
  }

  increment(creditId: CustomerId) {
    this._credit = this.credit.increment();
    //this.record();
  }


  toPrimitives() {
    return {
      id: this.id.value,
      total: this.credit.value,
    };
  }

}
