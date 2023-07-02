import { DomainEvent } from '../../../shared/domain/DomainEvent'

interface CustomerCreditCreatedDomainEventAttributes {
  readonly credit: number
}

export class CustomerCreditDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'customerCreadit.updated'

  readonly credit: number

  constructor ({
    aggregateId,
    eventId,
    credit,
    occurredOn
  }: {
    aggregateId: string
    eventId?: string
    credit: number
    occurredOn?: Date
  }) {
    super({ eventName: CustomerCreditDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
    this.credit = credit
  }

  toPrimitives (): CustomerCreditCreatedDomainEventAttributes {
    const { credit } = this
    return {
      credit
    }
  }

  static fromPrimitives (params: {
    aggregateId: string
    attributes: CustomerCreditCreatedDomainEventAttributes
    eventId: string
    occurredOn: Date
  }): DomainEvent {
    const { aggregateId, attributes, occurredOn, eventId } = params
    return new CustomerCreditDomainEvent({
      aggregateId,
      credit: attributes.credit,
      eventId,
      occurredOn
    })
  }
}
