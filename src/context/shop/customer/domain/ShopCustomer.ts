import { AggregateRoot } from '../../../shared/AggregateRoot';
import { ShopCustomerCreatedDate } from './ShopCustomerCreatedDate';
import { ShopCustomerId } from './ShopCustomerId';
import { ShopCustomerName } from './ShopCustomerName';
import { ShopCustomerEmail } from './ShopCustomerEmail';

export class ShopCustomer extends AggregateRoot {
  readonly id: ShopCustomerId;
  readonly email: ShopCustomerEmail;
  readonly name: ShopCustomerName;
  readonly createdDate: ShopCustomerCreatedDate;

  constructor(id: ShopCustomerId, name: ShopCustomerName, email: ShopCustomerEmail) {
    super();
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdDate = new ShopCustomerCreatedDate();
  }

  static create(
    id: ShopCustomerId,
    name: ShopCustomerName,
    email: ShopCustomerEmail
  ): ShopCustomer {
    const customer = new ShopCustomer(id, name, email);
    return customer;
  }

  // :Remember created date is ijected automatically
  static fromPrimitives(plainData: { id: string; name: string; email: string }): ShopCustomer {
    return new ShopCustomer(
      new ShopCustomerId(plainData.id),
      new ShopCustomerName(plainData.name),
      new ShopCustomerEmail(plainData.email),
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      email: this.email.value,
      createdDate: this.createdDate.value
    };
  }
}
