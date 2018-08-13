const line = require('@line/bot-sdk')
const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_SECRET,
}
const client = new line.Client(config)
const self = {
  responseData: [],
  addTextMessage: function (message) {
    self.responseData.push({
      type: 'text',
      text: message
    })
  },
  addImageMessage: function (originalContentUrl, previewImageUrl) {
    self.responseData.push({
      type: 'image',
      originalContentUrl,
      previewImageUrl
    })
  },
  replyMessage: function (token) {
    return client.replyMessage(token, self.responseData).catch(err => console.error(err))
  },
  log: function () {
    console.log(self.responseData)
  }
}

module.exports = self
