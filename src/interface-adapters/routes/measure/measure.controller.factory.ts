import { ConfirmMeasureUseCase } from '@/application/consumption-measure/confirm.use-case';
import { PrismaMeasureRepository } from '@/interface-adapters/repositories/measure';
import { MeasureController } from '@/interface-adapters/controllers/measure.controller';

export function MeasureControllerFactory() {
  const measureRepository = new PrismaMeasureRepository();

  const confirmMeasureUseCase = new ConfirmMeasureUseCase(measureRepository);

  const measureController = new MeasureController(confirmMeasureUseCase);

  return { measureController };
}
