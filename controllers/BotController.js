const database = require('../utilities/Database.js')
const Session = require('../utilities/Session.js')
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
        let result = await self.callback(event)
        res.json(result)
      } catch (err) {
        res.status(500).end()
        console.log(err.message)
        console.log(err)
      }
    }
  },
  callback: async function (event) {
    let dialog = 'MainMenuDialog'
    let sessionId = ''

    switch (event.source.type) {
      case 'user': sessionId = event.source.userId; break
      case 'group': sessionId = event.source.groupId; break
    }

    const session = new Session(sessionId)
    await session.load()
    let sessionData = session.get()
    if (session.isEmpty()) {
      // there are no session data so set first dialog and initail data
      sessionData.system.currentDialog = dialog
      sessionData.system.sessionId = sessionId
    } else {
      // there are some data so just set a dialog name
      dialog = sessionData.system.currentDialog
    }
    const user = event.source
    const message = event.message

    if (session.currentDialog !== undefined) {
      dialog = session.currentDialog
    }

    const connection = { db: 'Bot', collection: 'Message' }
    const processDialog = new dialogFactory[dialog](user, message, sessionData)
    const inputLog = processDialog.parseInputMessage()
    const result = processDialog.action()
    const responseLog = processDialog.parseResponseMessage(result.lineResponse)

    // Manage Session Data befor save
    if (result.nextDialog === null) {
      await session.destroy()
    } else {
      sessionData.system.currentDialog = result.nextDialog
      await session.update(sessionData)
    }

    database.save(inputLog, connection)
    database.save(responseLog, connection)

    // return { inputLog, responseLog }
    return result['lineResponse'].replyMessage(event.replyToken)
  }
}

module.exports = self
