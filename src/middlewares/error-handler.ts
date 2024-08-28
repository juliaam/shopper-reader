import type { ErrorRequestHandler, NextFunction } from 'express';
import { ZodError } from 'zod';

export const errorHandler: ErrorRequestHandler = (
  err,
  _,
  res,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return res.status(409).send({
      error: err.formErrors.fieldErrors,
      issues: err.name,
      message: 'Validation error'
    });
  }
  next();
};
