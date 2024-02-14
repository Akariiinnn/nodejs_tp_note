import { Router } from 'express';
import * as ActusController from '../controllers/actus.controller';

const router = Router();

router.get('/', ActusController.getActus);
router.get('/filter', ActusController.getFilteredActus);
router.get('/:id', ActusController.getActu);
router.get('/suggestions/:id', ActusController.getSuggestions);
router.post('/create', ActusController.createActu);
//router.put('/:id', ActusController.updateActu);
//router.delete('/:id', ActusController.deleteActu);

export default router;