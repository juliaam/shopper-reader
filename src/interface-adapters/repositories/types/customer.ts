import { Measure } from '@/domain/entities/measure';

export type GetByCodeSucess = {
  customer_code: string;
  measures: Measure[];
};
