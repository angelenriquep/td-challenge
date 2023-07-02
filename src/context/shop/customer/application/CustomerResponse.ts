import { Customer } from '../domain/Customer'

interface ICustomerResponse {
  id: string
  name: string
  email: string
  createdDate: Date
}

export class CustomerResponse {
  public readonly customers: ICustomerResponse[]

  constructor (customers: Customer[]) {
    this.customers = customers.map(customer => customer.toPrimitives())
  }
}
