import {
  UploadSucessResponse,
  ConfirmSucessResponse
} from '@/interface-adapters/repositories/types/consumption-measure';
import { ErrorResponse } from '@/interface-adapters/repositories/types/globals';

export abstract class ConsumptionMeterRepository {
  abstract upload(): Promise<UploadSucessResponse | ErrorResponse>;
  abstract confirm(): Promise<ConfirmSucessResponse | ErrorResponse>;
}
