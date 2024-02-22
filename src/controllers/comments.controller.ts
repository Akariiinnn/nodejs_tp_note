import {Request, Response} from 'express';
import * as CommentService from '../services/comments.service';
import {sendError, sendManuallyError, ServerError} from '../utils/error.utils';

export const addComment = async (req: Request, res: Response) => {
    const content = req.body;
    const comment = {
        user_id: content.user_id,
        actu_id: content.actu_id,
        content: content.comment
    }
    try {
        const newComment = await CommentService.addComment(comment);
        res.status(201).send(newComment);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), 'ERR-Comments-Unhandled');
        }
    }
};

export const deleteComment = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const newComment = await CommentService.deleteComment(id);
        res.status(200).send(newComment);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), 'ERR-Comments-Unhandled');
        }
    }
};

export const getComments = async (req: Request, res: Response) => {
    try {
        const comments = await CommentService.getComments();
        res.status(200).send(comments)
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), 'ERR-Comments-Unhandled');
        }
    }
}

export const getCommentsFromActuID = async (req: Request, res: Response) => {
    const actu_id = req.params.id;
    try {
        const comments = await CommentService.getCommentsFromActuID(actu_id);
        res.status(200).send(comments)
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), 'ERR-Comments-Unhandled');
        }
    }
}

export const getCommentByID = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const comment = await CommentService.getComment(id);
        res.status(200).send(comment);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), 'ERR-Comments-Unhandled');
        }
    }
}