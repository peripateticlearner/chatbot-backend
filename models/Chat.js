import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        messages: [
            {
                role: { // user or assistant
                    type: String,
                    required: true,
                    enum: ["user", "assistant"]
                },
                content: { // message content
                    type: String,
                    required: true
                },
                timeStamp: { // message timestamp
                    type: Date,
                    default: Date.now
                }
            }
        ]
    },
    { timestamps: true } // createdAt, updatedAt
);

export default mongoose.model("Chat", chatSchema);
