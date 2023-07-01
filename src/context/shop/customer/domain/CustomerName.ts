import { StringValueObject } from '../../../shared/domain/StringValueObject'

export class CustomerName extends StringValueObject {
  constructor (value: string) {
    super(value)
    this.ensureLengthIsLessThan30Characters(value)
  }

  private ensureLengthIsLessThan30Characters (value: string): void {
    if (value.length > 30) {
      throw new Error(`The Customer name <${value}> has more than 30 characters`)
    }
  }
}
