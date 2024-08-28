import { ConfirmSucessResponse } from '@/interface-adapters/repositories/types/measure';
import { ErrorResponse } from '@/interface-adapters/repositories/types/globals';

export abstract class MeasureRepository {
  abstract confirm(): Promise<ConfirmSucessResponse | ErrorResponse>;
}
