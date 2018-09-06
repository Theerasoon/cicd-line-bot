var LineResponse = require('../utilities/LineResponse.js');
var normalizedPath = require("path").join(__dirname, "/dialog");
var dialogFactory = {}
require("fs").readdirSync(normalizedPath).forEach(function(file) {
  dialogFactory[file.replace('.js','')] = require("./dialog/" + file);
});

const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_SECRET,
}

const self = {
  line: {
    webhook: async function (req, res, next) {
      try {
        const event = req.body.events[0]
        let result = self.callback(event)
        res.json(result)
      } catch (err) {
        res.status(500).end()
        console.log(err.message)
        console.log(err)
      }
    }
  },
  callback: function (event) {
    let sessionId = ''
    let dialog = 'MainMenuDialog'

    switch (event.source.type) {
      case 'user' : sessionId = event.source.userId
      case 'group' : sessionId = event.source.groupId
    }

    const session = {
      currentDialog : 'MainMenuDialog',
      data: {}
    }
    // "source": {
    //   "groupId": "Cdb41f281fac1deca612038f97c405223",
    //   "userId": "U851c7ae72275843a9c7a236a7fe01529",
    //   "type": "group"
    // },
    const user = event.source
    // "message": {
    //   "type": "text",
    //   "id": "7052487642005",
    //   "text": "image map"
    // }
    const message = event.message

    if ( session.currentDialog !== undefined ) {
      dialog = session.currentDialog
    }

    let processDialog = new dialogFactory[dialog](user, message, session)
    let result = processDialog.action()
    return lineResponse.replyMessage(event.replyToken)
  }
}

module.exports = self
