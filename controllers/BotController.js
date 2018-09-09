const database = require('../utilities/Database.js')
var normalizedPath = require("path").join(__dirname, "/dialog")
var dialogFactory = {}

require("fs").readdirSync(normalizedPath).forEach(function (file) {
  dialogFactory[file.replace('.js', '')] = require("./dialog/" + file)
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
      case 'user': sessionId = event.source.userId
      case 'group': sessionId = event.source.groupId
    }

    const session = {
      currentDialog: 'MainMenuDialog',
      data: {}
    }
    const user = event.source
    const message = event.message

    if (session.currentDialog !== undefined) {
      dialog = session.currentDialog
    }

    const connection = { db: 'Bot', collection: 'Message' }
    const processDialog = new dialogFactory[dialog](user, message, session)
    const inputLog = processDialog.parseInputMessage()
    database.save(inputLog, connection)
    const result = processDialog.action()
    const responseLog = processDialog.parseResponseMessage(result['lineResponse'])
    database.save(responseLog, connection)
    // return { inputLog, responseLog }
    return result['lineResponse'].replyMessage(event.replyToken)
  }
}

module.exports = self
