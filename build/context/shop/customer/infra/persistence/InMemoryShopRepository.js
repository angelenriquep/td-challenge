"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
class CustomerRepository {
    constructor() {
        this.customers = [];
    }
    getAllCustomers() {
        return this.customers;
    }
    getCustomerById(id) {
        return this.customers.find((customer) => customer.id === id);
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    updateCustomer(id, updatedCustomer) {
        const index = this.customers.findIndex((customer) => customer.id === id);
        if (index !== -1) {
            this.customers[index] = Object.assign(Object.assign({}, updatedCustomer), { id });
            return true;
        }
        return false;
    }
    deleteCustomer(id) {
        const index = this.customers.findIndex((customer) => customer.id === id);
        if (index !== -1) {
            this.customers.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.CustomerRepository = CustomerRepository;
