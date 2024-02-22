import {Router} from 'express';
import * as CommentController from '../controllers/comments.controller'
import * as AuthMiddleware from '../middlewares/auth.middleware'
import * as CommentMiddleware from '../middlewares/comments.middleware'

const router = Router()

router.get("/", CommentController.getComments)
router.get("/actu/:id", CommentController.getCommentsFromActuID)
router.get("/:id", CommentController.getCommentByID)
router.put("/", AuthMiddleware.checkRole("user") ,CommentController.addComment)
router.delete("/:id", CommentMiddleware.checkCommentOwner,  CommentController.deleteComment)

export default router;