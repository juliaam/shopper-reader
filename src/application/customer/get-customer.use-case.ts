import { CustomerRepository } from '@/domain/repositories/customer';
import { GetByCodeSucess } from '@/interface-adapters/repositories/types/customer';

export class GetCustomerUseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(customerCode: string): Promise<GetByCodeSucess> {}
}
