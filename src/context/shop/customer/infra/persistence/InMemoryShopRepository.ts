interface Customer {
  id: string;
  name: string;
  email: string;
}

export class CustomerRepository {
  private customers: Customer[];

  constructor() {
    this.customers = [];
  }

  getAllCustomers(): Customer[] {
    return this.customers;
  }

  getCustomerById(id: string): Customer | undefined {
    return this.customers.find((customer) => customer.id === id);
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  updateCustomer(id: string, updatedCustomer: Customer): boolean {
    const index = this.customers.findIndex((customer) => customer.id === id);
    if (index !== -1) {
      this.customers[index] = { ...updatedCustomer, id };
      return true;
    }
    return false;
  }

  deleteCustomer(id: string): boolean {
    const index = this.customers.findIndex((customer) => customer.id === id);
    if (index !== -1) {
      this.customers.splice(index, 1);
      return true;
    }
    return false;
  }
}
