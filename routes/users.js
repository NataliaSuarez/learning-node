var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('simple_response', { message: 'respond with a resource' });
});

module.exports = router;
