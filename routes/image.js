var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/:name/:size', function(req, res, next) {
  const imageName = req.params.name
  const imageSize = req.params.size
  const image = fs.readFileSync(`./public/images/${imageName}/${imageSize}.png`);
  res.writeHead(200, {'Content-Type': 'image/png' });
  res.end(image, 'binary');
});

module.exports = router;
