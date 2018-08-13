var line = require('@line/bot-sdk')

const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_SECRET,
};

const client = new line.Client(config);

const self = {
  facebook: {
    webhook: async function (req, res, next) {
      try {
        const event = req.body.events[0]
        let result = await self.callback(event)
        res.json(result)
      } catch (err) {
        res.status(500).end()
        console.log(err.message)
        console.log(err)
      }
    }
  },
  callback: async function(event) {
    let result = {}
    if (event.type == 'message' && event.message.type == 'text') {
      const echo = {
        type: 'text',
        text: event.message.text
      };
      result = client.replyMessage(event.replyToken, echo)
    }
    return result
  },
}

module.exports = self
