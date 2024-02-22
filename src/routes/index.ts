import { Router } from 'express';
import actuRoutes from './actus.routes';
import * as ActusController from '../controllers/actus.controller';
import usersRoutes from './users.routes';
import authRoutes from './auth.routes';
import commentsRoutes from './comments.routes';

const router = Router();

router.use('/v1/actus', actuRoutes);
router.use('/v1/users', usersRoutes);
router.use('/v1/auth', authRoutes);
router.use('/v1/comments', commentsRoutes);

export default router;