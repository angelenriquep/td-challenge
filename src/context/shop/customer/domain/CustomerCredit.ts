export class CustomerCredit {
  readonly value: number

  constructor (value: any) {
    this.value = this.ensureIsValidCredit(value)
  }

  private ensureIsValidCredit (value: any): number {
    if (value !instanceof Number) {
      throw new Error(`The Customer credit should be numeric`)
    }

    if (value < 0) {
      throw new Error(`The Customer credit <${value}> should be integer positive`)
    }

    return value
  }
}
