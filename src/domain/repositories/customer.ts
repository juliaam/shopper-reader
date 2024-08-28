import { GetByCodeSucess } from '@/interface-adapters/repositories/types/customer';
import { ErrorResponse } from '@/interface-adapters/repositories/types/globals';

export abstract class CustomerRepository {
  abstract getByCode(): Promise<GetByCodeSucess | ErrorResponse>;
}
