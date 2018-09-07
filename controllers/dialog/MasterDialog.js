var LineResponse = require('../../utilities/LineResponse.js')

class MasterDialog {
  /**
   * Class constructor
   * @param {Object} user - an json object that contains user information which are {groupId, userId, type}
   * @param {Object} message - an object that contains message information which are { type, id, text }
   */
  constructor(user, message, session) {
    this.user = user
    this.message = message
    this.session = session
    this.eventResponses = {
      onText: {},
      onTextDefault: {}
    }
  }

  /**
   * A configuration method
   * @param {Object} message - an object that contains message information which are { type, id, text }
   */
  config() {
    let config = {
      useTextProcessing: true
    }
    this.config = config
  }

  /**
   * A method that shoud be overrided by child class when text processing is enabled
   * @param {Object} message - an object that contains message information which are { type, id, text }
   */
  textProcessing(message) {
    throw "You need to implement `textProcessing()` if useTextProcessing is enabled!!";
  }

  /**
   * A register method uses for handle text message
   * @param {String} trigger - trigger message or the result of textProcessing() to fire action function
   * @param {Function} action - a callback function
   */
  onText(trigger, action) {
    const callbackFunction = { action }
    this.eventResponses.onText[trigger] = callbackFunction
  }

  /**
   * A register method uses for handle text message in case of trigger not found in onText() 
   * @param {Function} action - a callback function
   */
  onTextDefault(action) {
    const callbackFunction = { action }
    this.eventResponses.onTextDefault = callbackFunction
  }

  /**
   * A action function that select the function to call
   * @return {LineResponse} - a retrun object
   */
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

  /**
   * A facetory function to create LineResponse object
   * @return {LineResponse} - a retrun object
   */
  lineResponseFactory() {
    const config = {
      channelAccessToken: process.env.LINE_ACCESS_TOKEN,
      channelSecret: process.env.LINE_SECRET,
    }
    return new LineResponse(config) 
  }
}

module.exports = MasterDialog
