import { Router } from 'express';
import actuRoutes from './actus.routes';

const router = Router();

router.get('/v1/actus', actuRoutes);

export default router;