var MasterDialog = require('./MasterDialog.js')

class GameOpenImageMainDialog extends MasterDialog {
  constructor(user, message, session) {
    super(user, message, session)
    this.config()
    this.create()
  }

  config() {
    super.config()
    this.config.useTextProcessing = true
  }

  textProcessing(message) {
    return message.text
  }

  create() {

    this.onTextDefault(function(user, message, session, lineResponse) {
      const nextDialog = null
      return { lineResponse, nextDialog }
    })
  }

}

module.exports = GameOpenImageMainDialog
