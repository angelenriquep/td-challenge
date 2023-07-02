import { DomainEvent } from './DomainEvent'

export interface EventBus {
  publish: (events: DomainEvent[]) => Promise<void>
  addSubscribers: (subscribers: any) => void
}
