import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
import * as AuthMiddleware from '../middlewares/auth.middleware';
import * as AuthController from '../controllers/auth.controller';

const router = Router();

router.post('/create', UserController.createUser);
router.get('/:email', AuthMiddleware.checkRole("admin"),UserController.getUserByEmail);
router.get('/', AuthMiddleware.checkRole("admin"),UserController.getUsers);
router.delete('/:email', AuthMiddleware.checkRole("admin"),UserController.deleteUser);
router.put('/forgotPassword', AuthMiddleware.checkRole("admin"),UserController.modifyPassword);

export default router;