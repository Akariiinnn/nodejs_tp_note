import { Router } from 'express';
import * as ActusController from '../controllers/actus.controller';

const router = Router();

router.get('/', ActusController.getActus);
router.get('/:id', ActusController.getActu);
router.post('/', ActusController.createActu);
// router.put('/:id', ActusController.updateActu);
// router.delete('/:id', ActusController.deleteActu);

export default router;