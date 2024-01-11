const express = require("express");
const postController = require("./postController");
const { Router } = express; 

const router = new Router();

router.post('/posts', postController.create);

router.get('/posts',postController.get);

module.exports = router;
