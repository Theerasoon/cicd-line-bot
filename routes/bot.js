var express = require('express');
var router = express.Router();
var line = require('@line/bot-sdk');
var database = require('../utilities/Database.js');
var middlewares = {
  webhook: require('../middlewares/webhooklog.js')
}

const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_SECRET,
};

const client = new line.Client(config);

router.get('/', function(req, res, next) {
  const connection = {
    db: 'Bot',
    collection: 'Webhook'
  }
  database.find({}, connection)
    .then(result => res.json(result))
    .catch(err => console.error(err))
})


router.post('/webhook', routeMiddlewares, async function(req, res, next) {
  try {
    const event = req.body.events[0]
    let result = await callback(event)
    res.json(result)
  } catch (err) {
    res.status(500).end()
    console.log(err.message)
    console.log(err)
  }
})

async function callback(event) {
  let result = {}
  if (event.type == 'message' && event.message.type == 'text') {
    const echo = {
      type: 'text',
      text: event.message.text
    };
    result = client.replyMessage(event.replyToken, echo)
  }
  return result
}

function routeMiddlewares(req, res, next) {
  try {
    middlewares.webhook.log(req)
  } catch (err) {
    console.log(err.message)
    console.log(err)
  }
  next();
}

module.exports = router;
