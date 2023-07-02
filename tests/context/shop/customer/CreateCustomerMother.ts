import { Customer } from '../../../../src/context/shop/customer/domain/Customer';
import { CustomerId } from '../../../../src/context/shared/domain/CustomerId';
import { CustomerEmail } from '../../../../src/context/shop/customer/domain/CustomerEmail';
import { CustomerName } from '../../../../src/context/shop/customer/domain/CustomerName';
import { CustomerCredit } from '../../../../src/context/shared/domain/CustomerCredit';
import { CustomerCreatedDate } from '../../../../src/context/shop/customer/domain/CustomerCreatedDate';

export class CreateCustomerMother {
  
  static createNewCustomer() {
    return new Customer(
      new CustomerId(),
      new CustomerName('Jonh Doe'),
      new CustomerEmail('whatever@gmail.com'),
      new CustomerCredit(10), 
      new CustomerCreatedDate(new Date().toISOString())
    );
  }

  static createInvalidCustomer() {}
}
