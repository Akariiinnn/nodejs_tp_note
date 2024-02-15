import * as AuthController from "../controllers/auth.controller";
import {Router} from "express";

const router = Router()

router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.post('/refresh', AuthController.refresh);

export default router;