import { ErrorResponse } from './types/globals';
import { ConfirmSucessResponse } from './types/measure';
import { MeasureRepository } from '@/domain/repositories/measure';

export class PrismaMeasureRepository implements MeasureRepository {
  confirm(): Promise<ConfirmSucessResponse | ErrorResponse> {
    throw new Error('vauhsd');
  }
}
