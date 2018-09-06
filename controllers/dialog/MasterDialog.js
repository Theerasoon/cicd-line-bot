var LineResponse = require('../../utilities/LineResponse.js')

class MasterDialog {
  constructor(user, message, session) {
    this.user = user
    this.message = message
    this.session = session
    this.eventResponses = {
      onText: {},
      onTextDefault: {}
    }
  }

  textProcessing(message) {
    throw "You need to implement `textProcessing()` if useTextProcessing is enabled!!";
  }

  config() {
    let config = {
      useTextProcessing: true
    }
    this.config = config
  }

  onText(trigger, action) {
    const callbackFunction = { action }
    this.eventResponses.onText[trigger] = callbackFunction
  }

  onTextDefault(action) {
    const callbackFunction = { action }
    this.eventResponses.onTextDefault = callbackFunction
  }

  action() {
    switch (this.message.type) {
      case 'text':
        let trigger = this.message.text
        if (this.config.useTextProcessing) {
          trigger = this.textProcessing(this.message)
        }
        const eventMessage = this.eventResponses.onText[trigger]
        if (eventMessage === undefined) {
          return this.eventResponses.onTextDefault['action'](this.user, this.message, this.session, this.lineResponseFactory())
        } else {
          return this.eventResponses.onText[trigger]['action'](this.user, this.message, this.session, this.lineResponseFactory())
        }
      }
  }

  lineResponseFactory() {
    const config = {
      channelAccessToken: process.env.LINE_ACCESS_TOKEN,
      channelSecret: process.env.LINE_SECRET,
    }
    return new LineResponse(config) 
  }
}

module.exports = MasterDialog
