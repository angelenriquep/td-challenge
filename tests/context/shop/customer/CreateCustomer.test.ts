import { expect } from 'chai'
import CustomerCreator from '../../../../src/context/shop/customer/application/CustomerCreator'
import { MockCustomerRepository } from '../mocks/MockCustomerRepository'

describe('CustomerCreator', () => {
  it('should create and save a customer', async () => {
    const customerRepository = new MockCustomerRepository()

    const customerCreator = new CustomerCreator(customerRepository)

    const name = 'John Doe'
    const email = 'john.doe@example.com'
    const credit = 100

    const result = await customerCreator.run(name, email, credit)

    expect(result).to.exist
    expect(result.name).to.equal(name)
    expect(result.email).to.equal(email)
    expect(result.credit).to.equal(credit)

    // Assert the customer is saved in the repository
    const customers = await customerRepository.searchAll()
    expect(customers).to.have.lengthOf(1)
    const savedCustomer = customers[0]
    expect(savedCustomer.name.value).to.equal(name)
    expect(savedCustomer.email.value).to.equal(email)
  })
})
