class MasterDialog {
  constructor (user, message, session) {
    this.user = user
    this.message = message
    this.session = session
    this.eventResponses = {
      textMessage: {}
    }
  }

  action () {
    switch (this.message.type) {
      case 'text' :
        if (this.eventResponses.textMessage[this.message.text] !== undefined ) {
          const r = this.eventResponses.textMessage[this.message.text](this.user, this.message, this.session)
        }
      break
    }
  }

  onTextMessage(triggerText, callback) {
    this.eventResponses.textMessage[triggerText] = callback
  }

}

module.exports = MasterDialog
