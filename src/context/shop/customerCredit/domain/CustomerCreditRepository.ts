import { CustomerCredit } from './CustomerCredit';
import { Nullable } from '../../../shared/domain/Nullable';

export interface CustomerCreditRepository {
  search(): Promise<Nullable<CustomerCredit>>;
  save(counter: CustomerCredit): Promise<void>;
}
