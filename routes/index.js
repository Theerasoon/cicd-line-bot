var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let token = process.env.LINE_ACCESS_TOKEN
  let secret = process.env.LINE_SECRET
  res.render('index', { title: 'Express', token, secret });
});

module.exports = router;
