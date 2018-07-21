var express = require('express');
var router = express.Router();
var line = require('@line/bot-sdk');

const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_SECRET,
};

const client = new line.Client(config);

router.post('/webhook', middlewares, function(req, res, next) {
  Promise.all(
    req.body.events.map(callback)
  ).then((result) => {
    res.json(result)
  }).catch((err) => {
   console.error(err);
   res.status(500).end();
 });
});

function callback(event) {
  let result = {}
  if (event.type == 'message' && event.message.type == 'text') {
    const echo = {
      type: 'text',
      text: event.message.text
    };
    result = client.replyMessage(event.replyToken, echo);
  }
  return result
}

function middlewares(req, res, next) {
  console.log(req.body)
  next();
}

module.exports = router;
