const mongoose = require("mongoose");

const helpPostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        description: {
            type: String,
        },
        images: [],
        author: { type: mongoose.Types.ObjectId, ref: "User" },
        votes: {
            type: Number,
            default: 0,
        },
        solved: {
            type: Boolean,
            default: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("HelpPost", helpPostSchema);
