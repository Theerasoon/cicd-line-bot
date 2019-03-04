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
    if (message.text.includes('สร้างเกม')) return 'สร้างเกม'
    if (message.text.includes('ออก')) return 'ออก'
    return message.text
  }

  create() {

    this.onTextDefault(function(user, message, session, lineResponse) {
      const nextDialog = 'GameOpenImageMainDialog'
      if(session['custom']['state'] == 'input-answer') {
        session['custom']['question']['answer'].push(message.text)
        const altText = 'เกมของคุณ'
        const flexMessage = this.buildFlexMessageInputAnswer(session)
        lineResponse.addTemplateMessage(altText, template)
      } else {
        lineResponse.addTextMessage('เย็นไว้')
      }
      return { lineResponse, nextDialog }
    })

    this.onText('ออก', function(user, message, session, lineResponse) {
      const nextDialog = null
      lineResponse.addTextMessage('ไว้เจอกัน')
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
      session['custom']['state'] = 'input-answer'
      session['custom']['question'] = {
        'question_image' : `https://cidc-line-bot.herokuapp.com/img/i/${image}`,
        'answer': []
      }
      lineResponse.addTextMessage('คำตอบของรูปนี้คืออะไรหล่ะ')
      return { lineResponse, nextDialog }
    })
  }

  buildFlexMessageInputAnswer(session) {
    const header = {
      "type": "box",
      "layout": "horizontal",
      "contents": [
        {
          "type": "text",
          "text": "List of correct answer",
          "weight": "bold",
          "size": "lg"
        }
      ]
    }
    const hero = {
      "type": "image",
      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
      "size": "full",
      "aspectMode": "cover"
    }
    const body = {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "หากต้องการเพิ่มคำตอบ\nพิมพ์คำตอบใหม่มาได้เลย",
          "color": "#444444",
          "wrap": true,
          "gravity": "center",
          "size": "md"
        },
        {
          "type": "box",
          "layout": "vertical",
          "margin": "xl",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "- จอนนี้ หวังหยัง",
                  "wrap": true,
                  "color": "#888888",
                  "size": "sm",
                  "flex": 9
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "- โจนาธาน อาเทอร์",
                  "wrap": true,
                  "color": "#888888",
                  "size": "sm",
                  "flex": 9
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "- โทน่าจี โทนี้จา",
                  "wrap": true,
                  "color": "#888888",
                  "size": "sm",
                  "flex": 9
                }
              ]
            }
          ]
        }
      ]
    }
    const footer = {
      "type": "box",
      "layout": "horizontal",
      "margin": "sm",
      "spacing": "sm",
      "contents": [
        {
          "type": "button",
          "style": "link",
          "height": "sm",
          "style": "secondary",
          "action": {
            "type": "message",
            "label": "ยกเลิก",
            "text": "ยกเลิก"
          }
        },
        {
          "type": "button",
          "style": "link",
          "height": "sm",
          "style": "primary",
          "action": {
            "type": "message",
            "label": "เสร็จสิ้น",
            "text": "เสร็จสิ้น"
          }
        },
        {
          "type": "spacer",
          "size": "sm"
        }
      ],
      "flex": 0
    }
    const flexMessage = {
      "type": "bubble",
      header,
      hero,
      body,
      footer
    }
    return flexMessage
  }

}

module.exports = GameOpenImageMainDialog
