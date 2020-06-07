var express = require('express');
var router = express.Router();

/* GET posts page. */
router.get('/', function(req, res, next) {
    res.render('posts', { message: 'posts display here' });
});

module.exports = router;