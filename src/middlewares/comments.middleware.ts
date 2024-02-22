import {NextFunction, Request, Response} from "express";
import * as CommentsService from "../services/comments.service";
import {sendError, sendManuallyError, ServerError} from "../utils/error.utils";

export const checkCommentOwner = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params._id;
    const user_id = req.body.user_id;
    try {
        const comment = await CommentsService.getComment(id)
        if (comment.user_id != user_id) {
            throw new ServerError(500, "ERR-Comments-Not-Owner", "comments.error.not_owner")
        }
        next()
    } catch (error) {
        if (error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), 'ERR-Comments-Unhandled');
        }
    }
}