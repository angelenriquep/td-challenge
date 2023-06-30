import { ShopCustomer } from './ShopCustomer';

// Keep interfaces always in api side, not client side
export interface ShopCustomerRepository {
  searchAll(): Promise<Array<ShopCustomer>>;
  save(course: ShopCustomer): Promise<void>;
}
