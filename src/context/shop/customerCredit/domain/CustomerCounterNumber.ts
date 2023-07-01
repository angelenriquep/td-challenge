import { NumberValueObject } from '../../../shared/domain/IntValueObject'

export class CustomerCounterNumber  extends NumberValueObject  { 
  constructor(value: number) {
    super(value)
  }

  increment(value: number): CustomerCounterNumber {
    return new CustomerCounterNumber(this.value + value);
  }
}
