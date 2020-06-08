var express = require('express');
var router = express.Router();

const Post = require('../models/post');

/* GET posts page. */
router.get('/', function(req, res, next) {
    res.render('posts', { message: 'posts display here' });
});

router.post('/add', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.send('okiii <3');
});

module.exports = router;