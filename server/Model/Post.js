/** @format */

const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    postNum: Number
  },
  { collection: "posts" }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
