var express = require('express');
var router = express.Router();
var database = require('../utilities/Database.js');

router.get('/webhook', function(req, res, next) {
  const connection = {
    db: 'Bot',
    collection: 'Webhook'
  }
  database.find({}, connection).then(result => {
    res.json({
      'status': 'success',
      'data': result
    })
  }).catch(err => {
    console.error(err)
    res.json({
      'status': 'fail',
      'error_message': err.message
    })
  })
});

router.get('/message', function (req, res, next) {
  const connection = {
    db: 'Bot',
    collection: 'Message'
  }
  database.find({}, connection).then(result => {
    res.json({
      'status': 'success',
      'data': result
    })
  }).catch(err => {
    console.error(err)
    res.json({
      'status': 'fail',
      'error_message': err.message
    })
  })
});

module.exports = router;
