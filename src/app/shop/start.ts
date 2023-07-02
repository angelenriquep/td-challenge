import { Server } from './server'
import { loadConfig, container } from './dependency-injection'
import { DomainEventSubscribers } from '../../context/shared/infra/eventBus/DomainEventSubscribers'

export let server: Server

// TODO: improve this
try {
  (async () => {
    await loadConfig()

    const eventBus = container.get('Shop.Customer.infra.InMemoryAsyncEventBus')
    eventBus.addSubscribers(DomainEventSubscribers.from(container))

    const port = process.env.PORT || '3000'
    const server = new Server(port)
    await server.listen()
  })()
} catch (e) {
  handleError(e)
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err)
  process.exit(1)
})
function handleError (e: any) {
  console.log(e)
  process.exit(1)
}
