import { ConsumptionMeterRepository } from '@/domain/repositories/consumption-measure';
import { ErrorResponse } from './types/globals';
import {
  ConfirmSucessResponse,
  UploadSucessResponse
} from './types/consumption-measure';

export class PrismaConsumptionMeasureRepository
  implements ConsumptionMeterRepository
{
  async upload(): Promise<UploadSucessResponse | ErrorResponse> {
    return;
  }
  async confirm(): Promise<ConfirmSucessResponse | ErrorResponse> {
    return;
  }
}
