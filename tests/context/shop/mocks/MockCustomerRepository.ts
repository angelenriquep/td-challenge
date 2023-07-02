import { Customer } from '../../../../src/context/shop/customer/domain/Customer';
import CustomerRepository from '../../../../src/context/shared/domain/CustomerRepository';
import { CreateCustomerMother } from '../customer/CreateCustomerMother';

export class MockCustomerRepository implements CustomerRepository {
  customers: Customer[] = [];

  async save(customer: Customer): Promise<Customer> {
    this.customers.push(customer);
    return customer;
  }

  async searchAll(): Promise<Customer[]> {
    return this.customers;
  }

  async matching(): Promise<Customer[]> { 
    return this.customers;
  }

  async update(updatedCustomer: Customer): Promise<Customer> {
    // Not implemented for the test
    return updatedCustomer;
  }

  async remove(id: string): Promise<Customer> {
    // Not implemented for the test
    return CreateCustomerMother.createNewCustomer()
  }
}