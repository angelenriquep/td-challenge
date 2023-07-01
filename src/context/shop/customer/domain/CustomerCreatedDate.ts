export class CustomerCreatedDate {
  readonly value: Date

  // Validate is a correct date? + always UTC
  constructor (createDate?: string) {
    this.value = createDate ? new Date(createDate) : new Date()
  }

  toString (): string {
    return this.value.toISOString()
  }
}
