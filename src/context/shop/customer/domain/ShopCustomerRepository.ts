import { ShopCustomer } from './ShopCustomer'

// Keep interfaces always in api side, not client side
export interface ShopCustomerRepository {
  save: (customer: ShopCustomer) => Promise<void>
  searchById: (id: string) => Promise<ShopCustomer>
  searchAll: () => Promise<ShopCustomer[]>
  update: (customer: ShopCustomer) => Promise<ShopCustomer>
  remove: (id: string) => Promise<ShopCustomer>
}
