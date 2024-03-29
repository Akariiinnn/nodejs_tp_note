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
        modified_at: {
            type: Date,
            default: ""
        },
        filters: {
            type: [String],
            required: true
        }
    }
)