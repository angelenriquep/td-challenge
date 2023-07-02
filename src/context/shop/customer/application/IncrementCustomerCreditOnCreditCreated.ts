import { DomainEventClass } from '../../../shared/domain/DomainEvent'
import { DomainEventSubscriber } from '../../../shared/domain/DomainEventSubscriber'
import { CustomerCreditDomainEvent } from '../domain/CustomerCreditDomainEvent'
import CustomerUpdater from './CustomerUpdater'

export class IncrementCustomerCreditOnCreditCreated implements DomainEventSubscriber<CustomerCreditDomainEvent> {
  constructor (private readonly incrementer: CustomerUpdater) {}

  subscribedTo (): DomainEventClass[] {
    return [CustomerCreditDomainEvent]
  }

  async on (domainEvent: CustomerCreditDomainEvent): Promise<void> {
    await this.incrementer.addCredit(domainEvent.aggregateId, domainEvent.credit)
  }
}
