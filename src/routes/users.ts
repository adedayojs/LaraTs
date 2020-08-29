import { Router } from 'express';
import Controller from '@controllers/users';

const router = Router();

router.get('/', async function (_req, res, _next) {
  const users = await Controller.show();
  res.status(200).json(users);
});

router.post('/', async function (_req, res, _next) {
  const user = await Controller.create();
  res.status(200).json(user);
});

export default router;
