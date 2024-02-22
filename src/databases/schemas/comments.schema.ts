import mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
    actu_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})