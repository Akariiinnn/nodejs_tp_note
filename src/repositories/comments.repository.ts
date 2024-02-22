import {CommentModel} from '../databases/models/comments.model';
import {ServerError} from "../utils/error.utils";

export const getComment = async (comment_id: string) => {
    try {
        const comment = await CommentModel.findById(comment_id)
        if(!comment) {
            throw new ServerError(404, "ERR-Comment-NotFound", "comment.error.not_found")
        }
        return comment
    } catch(error) {
        throw error.toString()
    }
};


export const getCommentsFromActuID = async (actu_id: string) => {
    try {
        const comments = await CommentModel.find({actu_id: actu_id});
        if(!comments) {
            throw new ServerError(404, "ERR-Comments-NotFound-From-ActuID", "comments.error.not_found_from_actu_id")
        }
        return comments
    } catch(error) {
        throw error.toString()
    }
};


export const addComment = async (comment: any) => {
    try {
        const newComment = await CommentModel.create( {
            actu_id: comment.actu_id,
            user_id: comment.user_id,
            content: comment.content
        });
        return newComment;
    } catch (error) {
        throw error.toString();
    }
}

export const deleteComment = async (comment_id: string) => {
    try {
        await CommentModel.findByIdAndDelete(comment_id);
        return "Comment with id " + comment_id + " has been deleted";
    } catch (error) {
        throw error.toString();
    }
}

export const getComments = async () => {
    try {
        const comments = await CommentModel.find();
        if (!comments) {
            throw new ServerError(404, "ERR-Comments-NotFound", "comments.error.not_found")
        }
        return comments;
    } catch (error) {
        throw error.toString();
    }
}