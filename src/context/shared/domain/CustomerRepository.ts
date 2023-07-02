import { Customer } from '../../shop/customer/domain/Customer'
import { Criteria } from './Criteria'

// Keep interfaces always in api side, not client side, do not pollute the infra
// with our domain problems
export default interface CustomerRepository {
  save: (customer: Customer) => Promise<Customer>
  searchAll: () => Promise<Customer[]>
  matching: (criteria: Criteria) => Promise<Customer[]>
  update: (customer: Customer) => Promise<Customer>
  remove: (id: string) => Promise<Customer>
}
