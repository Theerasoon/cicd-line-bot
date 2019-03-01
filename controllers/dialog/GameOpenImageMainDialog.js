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
    if (message.type !== 'text') return message.text
    if (!message.text.includes('สร้างเกม')) return 'สร้างเกม'
    return message.text
  }

  create() {

    this.onTextDefault(function(user, message, session, lineResponse) {
      const nextDialog = null
      lineResponse.addTextMessage('เย็นไว้')
      if(session['custom']['state'] == 'answer') {
        session['custom']['question']['answer'].push(message.text)
        let text = JSON.stringify(session['custom']['question'])
        lineResponse.addTextMessage(text)
      }
      return { lineResponse, nextDialog }
    })

    this.onText('สร้างเกม', function (user, message, session, lineResponse) {
      const nextDialog = 'GameOpenImageMainDialog'
      session['custom']['state'] = 'create_game'
      lineResponse.addTextMessage('เลือกรูปที่ต้องการแล้วสงมาได้เลย')
      return { lineResponse, nextDialog }
    })

    this.onImage(function (user, message, session, lineResponse, image) {
      const nextDialog = 'GameOpenImageMainDialog'
      session['custom']['state'] = 'answer'
      session['custom']['question'] = {
        'question_image' : `https://cidc-line-bot.herokuapp.com/img/i/${image}`,
        'answer': []
      }
      session['custom']['question'] = {}
      lineResponse.addTextMessage('คำตอบของรูปนี้คืออะไรหล่ะ')
      return { lineResponse, nextDialog }
    })
  }

}

module.exports = GameOpenImageMainDialog
