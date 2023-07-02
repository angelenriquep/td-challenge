import CustomerRepository from '../../../shared/domain/CustomerRepository'
import { EventBus } from '../../../shared/domain/EventBus'
import { Criteria } from '../../../shared/domain/Criteria'
import { CustomerCreditDomainEvent } from '../../customer/domain/CustomerCreditDomainEvent'

// NB: CustomerCredit not being used!
// Remember we are making the query using a CustomerRepository, we should try to
// refactor this in future iterations to use the service or domain events
export default class CustomerCreditCreated {
  constructor (private readonly repository: CustomerRepository, private readonly bus: EventBus) { }

  async run (id: string, credit: number) {
    const criteria = new Criteria([{ property: 'id', operator: '=', value: id }])

    const counter = await this.repository.matching(criteria)

    if (counter.length === 0) {
      throw new Error(`no customer found for id <${id}>`)
    }

    const record = counter[0]
    record.record(new CustomerCreditDomainEvent({ aggregateId: id, credit }))

    await this.bus.publish(record.pullDomainEvents())
  }
}
