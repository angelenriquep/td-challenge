import CustomerRepository from '../../../shared/domain/CustomerRepository'
import {CustomerResponse} from './CustomerResponse'
import { Criteria } from '../../../shared/domain/Criteria'

export default class CustomerFinder {
  constructor (private readonly repository: CustomerRepository) { }

  async run (criteria?: Criteria) {
    let  response

    if (criteria) {
      response = await this.repository.matching(criteria)
    } else {
      response = await this.repository.searchAll()
    }
    
    return new CustomerResponse(response)
  }
}
