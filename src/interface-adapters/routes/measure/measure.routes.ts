import { Router } from 'express';
import { MeasureControllerFactory } from './measure.controller.factory';
import { errorHandler } from '@/middlewares/error-handler';

const { measureController } = MeasureControllerFactory();

const router = Router();

router.post('/upload', measureController.upload, errorHandler);

export default router;
