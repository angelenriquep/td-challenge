import CustomerRepository from '../domain/CustomerRepository'
import {CustomerResponse} from './CustomerResponse'

export default class CustomerFinder {
  constructor (private readonly repository: CustomerRepository) { }

  async run (id: string) {
    if (id) {
      return await this.repository.searchById(id)
      
    }
    
    const response = await this.repository.searchAll()

    return new CustomerResponse(response)
  }
}
