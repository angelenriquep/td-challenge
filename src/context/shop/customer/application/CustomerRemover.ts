import CustomerRepository from '../../../shared/domain/CustomerRepository'

export default class CustomerRemover {
  constructor (private readonly repository: CustomerRepository) { }

  async run (id: string) {
    return await this.repository.remove(id)
  }
}
