const express = require("express");
const { getAllPost, createPost } = require("../controllers/helpController");
const requireAuth = require("../middlewares/requireAuth");

const Router = express.Router;

const router = Router();

router.get("/all", requireAuth, getAllPost);

router.post("/create", requireAuth, createPost);

module.exports = router;
