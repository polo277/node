var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render(__dirname + '/../views/users.jade');
});

module.exports = router;
