import { Uuid } from './Uuid'

export abstract class DomainEvent {
  static EVENT_NAME: string
  static fromPrimitives: (...args: any[]) => any
  readonly aggregateId: string
  readonly eventId: string
  readonly occurredOn: Date
  readonly eventName: string

  constructor (eventName: string, aggregateId: string, eventId?: string, occurredOn?: Date) {
    this.aggregateId = aggregateId
    this.eventId = eventId || Uuid.random().value
    this.occurredOn = (occurredOn != null) || new Date()
    this.eventName = eventName
  }

  abstract toPrimitive (): Object
}

export interface DomainEventClass { EVENT_NAME: string, fromPrimitives: (...args: any[]) => DomainEvent }
