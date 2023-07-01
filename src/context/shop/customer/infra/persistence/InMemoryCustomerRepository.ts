import CustomerRepository from '../../domain/CustomerRepository'
import { Customer } from '../../domain/Customer'
import { Criteria } from '../../../../shared/domain/Criteria';

export default class InMemoryCustomerRepository implements CustomerRepository {
  customers: Customer[]

  constructor() {
    this.customers = []
  }

  async save(customer: Customer): Promise<Customer> {
    this.customers.push(customer)
    return customer;
  }

  async matching(criteria: Criteria): Promise<Customer[]> {
    const { filters, order } = criteria;

    const filteredCustomers = this.customers.filter((customer) => {
      for (const filter of filters) {
        const { property, operator, value } = filter;
        if (!this.applyFilter(customer, property, operator, value)) {
          return false;
        }
      }
      return true;
    });

    if (order) {
      filteredCustomers.sort((a, b) => {
        const { property, direction } = order;
        const propA = a[property];
        const propB = b[property];
        if (propA < propB) {
          return direction === 'asc' ? -1 : 1;
        } else if (propA > propB) {
          return direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return filteredCustomers;
  }

  applyFilter(customer: Customer, property: string, operator: string, value: any): boolean {
    const propertyValue = customer[property];

    switch (operator) {
      case '=':
        return propertyValue === value;
      case '!=':
        return propertyValue !== value;
      case '>':
        return propertyValue > value;
      case '<':
        return propertyValue < value;
      case '>=':
        return propertyValue >= value;
      case '<=':
        return propertyValue <= value;
      default:
        return false;
    }
  }

  async searchAll(): Promise<Customer[]> {
    return this.customers
  }

  async update(updatedCustomer: Customer): Promise<Customer> {
    const index = this.customers.findIndex((customer) => customer.id.value === updatedCustomer.id.value)
    if (index === -1) {
      throw new Error(`Customer with ID ${updatedCustomer.id} not found`)
    }
    this.customers[index] = updatedCustomer
    return updatedCustomer
  }

  async remove(id: string): Promise<Customer> {
    const index = this.customers.findIndex((customer) => customer.id.value === id)
    if (index === -1) {
      throw new Error(`Customer with ID ${id} not found`)
    }
    const removedCustomer = this.customers.splice(index, 1)[0]
    return removedCustomer
  }
}
