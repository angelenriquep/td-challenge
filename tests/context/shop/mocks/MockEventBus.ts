import { EventBus } from '../../../../src/context/shared/domain/EventBus';

export class MockEventBus implements EventBus {
  events: any[] = [];

  addSubscribers(subscribers: any): void {
    throw new Error('Method not implemented.');
  }

  async publish(event: any): Promise<void> {
    this.events.push(event);
  }
}