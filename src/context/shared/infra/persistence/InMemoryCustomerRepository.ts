import CustomerRepository from '../../domain/CustomerRepository'
import { Customer } from '../../../shop/customer/domain/Customer'
import { Criteria } from '../../domain/Criteria';

type CustomerProperty = keyof Customer;

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
    const { filters, order, limit, offset } = criteria;

    let filteredCustomers = this.customers;

    if (filters.length > 0) {
      filteredCustomers = this.applyFilters(filteredCustomers, filters);
    }

    if (order) {
      filteredCustomers = this.applyOrder(filteredCustomers, order);
    }

    if (offset) {
      filteredCustomers = filteredCustomers.slice(offset);
    }

    if (limit) {
      filteredCustomers = filteredCustomers.slice(0, limit);
    }

    return filteredCustomers;
  }

  applyFilters(customers: Customer[], filters: any[]): Customer[] {
    return customers.filter((customer) => {
      for (const filter of filters) {
        const { property, operator, value } = filter;
        if (!this.applyFilter(customer, property, operator, value)) {
          return false;
        }
      }
      return true;
    });
  }

  applyFilter(customer: Customer, property: CustomerProperty, operator: string, value: any): boolean {
    const primitiveCustomer = customer.toPrimitives()
    // TODO: remove this any
    const propertyValue = (primitiveCustomer as any)[property]

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

  applyOrder(customers: Customer[], order: string): Customer[] {
    const [property, direction] = order.split(' ');
    return customers.sort((a, b) => {
      const propA = a[property as  CustomerProperty];
      const propB = b[property as  CustomerProperty];
      if (propA < propB) {
        return direction === 'asc' ? -1 : 1;
      } else if (propA > propB) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
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
