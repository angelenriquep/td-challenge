import { Customer } from '../domain/Customer';

interface ICustomerResponse {
  id: string;
  name: string;
  email: string;
  createdDate: Date;
}

export class CustomerResponse {
  public readonly customers: Array<ICustomerResponse>;

  constructor(customers: Array<Customer>) {
    this.customers = customers.map(customer => customer.toPrimitives());
  }
}
