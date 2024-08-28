import { CustomerRepository } from '@/domain/repositories/customer';
import { ErrorResponse } from './types/globals';
import { GetByCodeSucess } from './types/customer';

export class PrismaCustomerRepository implements CustomerRepository {
  async getByCode(): Promise<GetByCodeSucess | ErrorResponse> {
    return;
  }
}
