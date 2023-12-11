const HelpPost = require("../models/HelpPost");

const getAllPost = async (req, res) => {
    try {
        const posts = await HelpPost.find().select({
            __v: 0,
        });

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
};

const createPost = async (req, res) => {
    try {
        const { title, description } = await req.body;

        const { userId } = req.user;

        const response = await HelpPost.create({
            title,
            description,
            author: userId,
        });

        console.log(response);

        res.status(201).json({ success: true });
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = { getAllPost, createPost };
