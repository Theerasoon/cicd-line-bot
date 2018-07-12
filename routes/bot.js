var express = require('express');
var router = express.Router();
var line = require('@line/bot-sdk');

const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_SECRET,
};

const client = new line.Client(config);

router.post('/webhook', function(req, res, next) {
  let event = req.body.events.pop()
  let result = 'fine'
  if (event.type == 'message' && event.message.type == 'text') {
    const echo = {
      type: 'text',
      text: event.message.text
    };
    result = client.replyMessage(event.replyToken, echo);
  }
  res.send(result);
});

module.exports = router;
