export class CustomerCredit {
  readonly value: number

  constructor (value?: number) {
    this.value = value ? this.ensureIsValidCredit(value) : 0
  }

  // TODO: Use joi for better validation?
  private ensureIsValidCredit (value: any): number {
    if (valueinstanceof Number) {
      throw new Error('The Customer credit should be numeric')
    }

    if (value < 0) {
      throw new Error(`The Customer credit <${value}> should be integer positive`)
    }

    return value
  }
}
