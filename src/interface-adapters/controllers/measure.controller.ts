import { ConfirmMeasureUseCase } from '@/application/consumption-measure/confirm.use-case';
import { NextFunction, Request, Response } from 'express';
import { measureUploadSchema } from '../validators/measure/measure-upload.schema';

export class MeasureController {
  constructor(private readonly confirmMeasureUseCase: ConfirmMeasureUseCase) {}

  async upload(req: Request, res: Response, next: NextFunction) {
    try {
      const { image, customer_code, measure_datetime, measure_type } =
        measureUploadSchema.parse(req.body);
      await this.confirmMeasureUseCase.execute(req.body);
    } catch (error) {
      console.log('caiu aqui');
      next(error);
    }
  }
}
