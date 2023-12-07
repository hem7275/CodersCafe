const getAllPost = (req, res) => {

    console.log("user", req.user);
    console.log("all post called")
    res.send("helo controller all post");
};

const createPost = (req, res) => {
    res.send("create post");
};

module.exports = { getAllPost, createPost };
