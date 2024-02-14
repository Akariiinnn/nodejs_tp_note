import mongoose from 'mongoose'

export const ActusSchema = new mongoose.Schema(
    {
        title: {
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
        },
        filters: {
            type: [String],
            required: true
        },
        comments: {
            type: [
                {
                    user: {
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
                }
            ]
        }
    }
)