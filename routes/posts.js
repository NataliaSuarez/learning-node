var express = require('express');
var router = express.Router();

/* GET posts page. */
router.get('/', function(req, res, next) {
    res.render('posts', { message: 'posts display here' });
});

router.post('/add', function(req, res){
    console.log(req.body);
    res.send('okiii <3');
});

module.exports = router;