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

router.get('/session', function (req, res, next) {
  const connection = {
    db: 'Bot',
    collection: 'Session'
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

router.get('/session/:id', function (req, res, next) {
  const connection = {
    db: 'Bot',
    collection: 'Session'
  }
  const query = { 'system.sessionId': req.params.id } 
  database.find(query, connection).then(result => {
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

router.delete('/session', function (req, res, next) {
  const connection = {
    db: 'Bot',
    collection: 'Session'
  }
  database.delete({}, connection).then(result => {
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

router.delete('/session/:id', function (req, res, next) {
  const connection = {
    db: 'Bot',
    collection: 'Session'
  }
  const query = { 'system.sessionId': req.params.id } 
  database.delete(query, connection).then(result => {
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
