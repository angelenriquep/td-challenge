import { EventEmitter } from 'events';
import { DomainEvent } from '../../domain/DomainEvent'

export class InMemoryAsyncEventBus extends EventEmitter {
  async publish(events: DomainEvent[]): Promise<void> {
    events.map(event => this.emit(event.eventName, event));
  }

  addSubscribers(subscribers: any) {
    subscribers.items.forEach((subscriber: any) => {
      subscriber.subscribedTo().forEach((event: any) => {
        this.on(event.EVENT_NAME, subscriber.on.bind(subscriber));
      });
    });
  }
}
