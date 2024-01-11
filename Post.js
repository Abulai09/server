const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  post: { type: String, required: true }
});

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;
