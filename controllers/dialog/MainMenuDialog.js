var MasterDialog = require('./MasterDialog.js')

class MainMenuDialog extends MasterDialog {
  constructor (user, message, session) {
    super(user, message, session)
    this.create()
  }

  create () {
    this.onTextMessage('message', function(user, message, session) {
      return 'Im a message'
    })

    this.onTextMessage('image map', function(user, message, session) {
      return 'Im a image map'
    })
  }
}

module.exports = MainMenuDialog
