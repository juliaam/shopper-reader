import Express from 'express';
import measureRouter from '../interface-adapters/routes/measure/measure.routes';

const app = Express();

app.use(Express.json());

// routes

app.use('/api/measure', measureRouter);

export { app };
