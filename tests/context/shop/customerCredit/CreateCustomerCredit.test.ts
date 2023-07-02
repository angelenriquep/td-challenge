import { expect } from 'chai'
import { MockCustomerRepository } from '../mocks/MockCustomerRepository'
import { MockEventBus } from '../mocks/MockEventBus'
import CustomerCreditCreated from '../../../../src/context/shop/customerCredit/application/CustomerCreditCreated'
import { CreateCustomerMother } from '../customer/CreateCustomerMother'

describe('CustomerCreditCreated', () => {
  it('should update customer credit and publish event', async () => {
    const customerRepository = new MockCustomerRepository()
    const eventBus = new MockEventBus()
    const customerCreditCreated = new CustomerCreditCreated(customerRepository, eventBus)

    const credit = 10
    const customer = CreateCustomerMother.createNewCustomer()
    customerRepository.customers.push(customer)

    // Run the customer credit created logic
    await customerCreditCreated.run(customer.id.toString(), credit)

    // Assert that the customer credit is updated
    expect(customer.getCredit()).to.equal(credit)

    // Assert that the event is published
    expect(eventBus.events).to.have.lengthOf(1)

    const publishedEvent = eventBus.events[0][0]
    expect(publishedEvent.aggregateId).to.equal(customer.toPrimitives().id)
    expect(publishedEvent.credit).to.equal(credit)
  })

  it('should throw an error for non-existing customer', async () => {
    const customerRepository = new MockCustomerRepository()
    const eventBus = new MockEventBus()

    const customerCreditCreated = new CustomerCreditCreated(customerRepository, eventBus)
    const customer = CreateCustomerMother.createNewCustomer()
    const id = customer.toPrimitives().id

    try {
      await customerCreditCreated.run(id, 10)
      expect.fail('Expected an error to be thrown')
    } catch (error) {
      expect((error as Error).message).to.equal(`no customer found for id <${id}>`)
    }

    expect(eventBus.events).to.have.lengthOf(0)
  })
})
