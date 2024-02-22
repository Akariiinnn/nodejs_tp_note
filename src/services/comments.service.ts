import * as CommentRepository from '../repositories/comments.repository';

export const getCommentsFromActuID = async (actu_id: string) => {
    try {
        const comments = await CommentRepository.getCommentsFromActuID(actu_id)
        return comments;
    } catch (error) {
        throw error.toString();
    }
};

export const getComment = async (comment_id: string) => {
    try {
        const comment = await CommentRepository.getComment(comment_id);
        return comment;
    } catch (error) {
        throw error.toString();
    }

}


export const getComments = async () => {
    try {
        const comments = await CommentRepository.getComments();
        return comments
    } catch (error) {
        throw error.toString();
    }
};


export const addComment = async (comment) => {
    try {
        const newComment = await CommentRepository.addComment(comment);
        return newComment;
    } catch (error) {
        throw error.toString();
    }
}

export const deleteComment = async (comment_id) => {
    try {
        const status = await CommentRepository.deleteComment(comment_id);
        return status;
    } catch (error) {
        throw error.toString();
    }
}