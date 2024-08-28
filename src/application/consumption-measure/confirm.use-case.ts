import { PrismaMeasureRepository } from '@/interface-adapters/repositories/measure';

export class ConfirmMeasureUseCase {
  constructor(private readonly measureRepository: PrismaMeasureRepository) {}
  async execute(body: any) {
    await this.measureRepository.confirm();
  }
}
