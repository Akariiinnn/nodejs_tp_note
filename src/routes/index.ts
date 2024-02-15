import { Router } from 'express';
import actuRoutes from './actus.routes';
import * as ActusController from '../controllers/actus.controller';
import usersRoutes from './users.routes';
import authRoutes from './auth.routes';

const router = Router();

router.use('/v1/actus', actuRoutes);
router.use('/v1/users', usersRoutes);
router.use('/v1/auth', authRoutes);

export default router;