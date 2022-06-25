/** @format */

const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
  },
  { collation: "Posts" }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
