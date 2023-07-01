import { ulid, isValid  } from 'ulidx'

export class Ulid {
  readonly value: string

  constructor (value?: string) {
    this.value = value ? this.ensureIsValidUlid(value) : ulid()
  }

  private ensureIsValidUlid(value: string) {
    if (!isValid(value)) {
      throw new Error(`Invalid id <${value}>`);
    }
    return value
  }

  toString (): string {
    return this.value
  }
}
