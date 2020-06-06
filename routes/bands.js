var express = require('express');
var router = express.Router();

/* GET bands page. */
router.get('/', function(req, res, next) {
    res.render('simple_response', { message: 'alsjflakjfalksf' });
});

module.exports = router;