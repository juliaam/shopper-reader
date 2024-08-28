import { z } from 'zod';

export const measureUploadSchema = z.object({
  image: z.string(),
  customer_code: z.string(),
  measure_datetime: z.date(),
  measure_type: z.enum(['WATER', 'GAS'])
});
