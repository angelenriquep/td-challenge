export class ShopCustomerCreatedDate {
  readonly value: Date;

  constructor() {
    this.value = new Date();
  }

  toString(): string {
    return this.value.toISOString();
  }
}
