import { StringValueObject } from '../../../shared/domain/StringValueObject'

export class CustomerEmail extends StringValueObject {
  constructor (value: string) {
    super(value)
    this.ensureIsValidEmail(value)
  }

  private ensureIsValidEmail (value: string): void {
    const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    const isValidEmail = emailRegExp.test(value)

    if (!isValidEmail) {
      throw new Error(`The Customer email <${value}> is not a valid e-mail`)
    }
  }
}
