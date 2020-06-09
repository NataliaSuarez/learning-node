var express = require('express');
var router = express.Router();

const Post = require('../models/post');

/* GET posts page. */
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.render('posts', { posts: posts });
});

router.post('/add', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.redirect('/posts');
});

router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    await Post.remove({_id:id});
    res.redirect('/posts');
});

module.exports = router;