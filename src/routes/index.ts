import { Router } from 'express';
import actuRoutes from './actus.routes';
import * as ActusController from '../controllers/actus.controller';

const router = Router();

router.use('/v1/actus', actuRoutes);

export default router;