import { Ulid } from './Ulid'

export abstract class DomainEvent {
  static EVENT_NAME: string
  static fromPrimitives: (params: {
    aggregateId: string
    eventId: string
    occurredOn: Date
    attributes: DomainEventAttributes
  }) => DomainEvent

  readonly aggregateId: string
  readonly eventId: string
  readonly occurredOn: Date
  readonly eventName: string

  // NB: Inline types help with compilation
  constructor (params: { eventName: string, aggregateId: string, eventId?: string, occurredOn?: Date }) {
    const { aggregateId, eventName, eventId, occurredOn } = params
    this.aggregateId = aggregateId
    this.eventId = eventId || Ulid.toString()
    this.occurredOn = (occurredOn != null) || new Date()
    this.eventName = eventName
  }

  abstract toPrimitives (): DomainEventAttributes
}

export interface DomainEventClass {
  EVENT_NAME: string
  fromPrimitives: (params: {
    aggregateId: string
    eventId: string
    occurredOn: Date
    attributes: DomainEventAttributes
  }) => DomainEvent
}

type DomainEventAttributes = any
