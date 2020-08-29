import { Router } from 'express';
import userRouteHandler from './users';
import sampleController from '../controllers/sample';

const router = Router();

router.get('/', function (_req, res, _next) {
  const message = sampleController();

  res.status(200).json({ message });
});

router.use('/users', userRouteHandler);

export default router;
