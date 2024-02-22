import { Router } from 'express';
import * as ActusController from '../controllers/actus.controller';
import * as AuthMiddleware from '../middlewares/auth.middleware';

const router = Router();

router.get('/', ActusController.getActus);
router.get('/:id', ActusController.getActu);
router.get('/suggestions/:id', ActusController.getSuggestions);
router.post('/create', AuthMiddleware.checkRole("editor"), ActusController.createActu);
router.put('/', AuthMiddleware.checkRole("editor"), ActusController.updateActu);
router.delete('/:id', AuthMiddleware.checkRole("editor") , ActusController.deleteActu);

export default router;