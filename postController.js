const Post = require('./Post.js');

class PostController{
  async create(req,res){
    try {
      const { post } = req.body;
      const posted = await Post.create({ post });
      res.status(200).json(posted);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async get(req,res){
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new PostController()