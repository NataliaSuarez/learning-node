var express = require('express');
var router = express.Router();

const Post = require('../models/post');

/* GET posts page. */
router.get('/', async (req, res, next) => {
    const posts = await Post.find();
    console.log(posts);
    res.render('posts', { posts: posts });
});

router.post('/add', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.redirect('/posts');
});

module.exports = router;