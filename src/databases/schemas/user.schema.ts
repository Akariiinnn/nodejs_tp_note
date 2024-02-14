import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    comments_amount: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})
