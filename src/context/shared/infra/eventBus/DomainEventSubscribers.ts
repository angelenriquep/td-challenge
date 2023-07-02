// import { ContainerBuilder, Definition } from 'node-dependency-injection'
import { ContainerBuilder } from 'node-dependency-injection'
import { DomainEvent } from '../../domain/DomainEvent'
import { DomainEventSubscriber } from '../../domain/DomainEventSubscriber'

export class DomainEventSubscribers {
  constructor (public items: Array<DomainEventSubscriber<DomainEvent>>) {}

  static from (container: ContainerBuilder): DomainEventSubscribers {
    // try { ⚠️⚠️⚠️
    //   const subscriberDefinitions = container.findTaggedServiceIds('domainEventSubscriber') as Map<String, Definition>;
    //   console.log(subscriberDefinitions)
    //   // subscriberDefinitions.forEach((value: Definition, key: String) => {
    //   //   const domainEventSubscriber = container.get<DomainEventSubscriber<DomainEvent>>(key.toString());
    //   //   subscribers.push(domainEventSubscriber);
    //   // });
    // } catch (err) {
    //   console.log(err)
    // }

    const service = container.get('Shop.Customer.application.IncrementCustomerCreditOnCreditCreated')
    const subscribers: Array<DomainEventSubscriber<DomainEvent>> = [service]

    return new DomainEventSubscribers(subscribers)
  }
}
