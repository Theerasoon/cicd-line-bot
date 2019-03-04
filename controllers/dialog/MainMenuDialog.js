var MasterDialog = require('./MasterDialog.js')
var Quote = require('../helper/Quote.js')
var Question = require('../helper/Game4Choice.js')

class MainMenuDialog extends MasterDialog {
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
    // like a firewall rule match and return
    if (message.type !== 'text') return message.text
    if (!message.text.includes('ตึลตึล')) return message.text
    if (message.text.includes('ขอคำคม')) return 'คำคม'
    if (message.text.includes('ขอเกม')) return 'ขอเกม'
    if (message.text.includes('ขอตอบ')) return 'ขอตอบ'
    if (message.text.includes('เกมเปิดป้าย')) return 'เกมเปิดป้าย'
  }

  create() {

    this.onTextDefault(function(user, message, session, lineResponse) {
      const nextDialog = 'MainMenuDialog'
      return { lineResponse, nextDialog }
    })

    this.onText('text', function (user, message, session, lineResponse) {
      const nextDialog = 'MainMenuDialog'
      lineResponse.addTextMessage('This is a text response!')
      return { lineResponse, nextDialog }
    })

    this.onText('image', function (user, message, session, lineResponse) {
      const nextDialog = 'MainMenuDialog'
      const original = 'https://instagram.fbkk1-1.fna.fbcdn.net/vp/a2a59708a2ef521c28a9137d345d882d/5BFCF4BA/t51.2885-15/sh0.08/e35/s640x640/32624069_209897666456908_4661064578824667136_n.jpg'
      const preivew = 'https://instagram.fbkk1-1.fna.fbcdn.net/vp/4811f0a2184418c4bfcb54fc755a5536/5B73E26F/t51.2885-15/e15/c0.90.720.720/s320x320/32041291_234964433776547_5995483318232023040_n.jpg'
      lineResponse.addImageMessage(original, preivew)
      return { lineResponse, nextDialog }
    })

    this.onText('button 1', function (user, message, session, lineResponse) {
      const nextDialog = 'MainMenuDialog'
      const altText = 'This is a button 1 response!'
      const template = {
        type: 'buttons',
        title: 'Can you solve this math?',
        text: '1 + 2 + 3',
        actions: [
          { label: '6', type: 'message', text: 'I know the answer is 6' },
          { label: '8', type: 'message', text: 'I know the answer is 10' },
          { label: 'Google Please', type: 'uri', uri: 'https://www.google.com' },
        ]
      }
      lineResponse.addTemplateMessage(altText, template)
      return { lineResponse, nextDialog }
    })

    this.onText('button 2', function (user, message, session, lineResponse) {
      const nextDialog = 'MainMenuDialog'
      const altText = 'This is a button 2 response!'
      const template = {
        type: 'buttons',
        thumbnailImageUrl: 'https://instagram.fbkk1-1.fna.fbcdn.net/vp/2d569d7624cc1df485c6486b1373f967/5BF425D6/t51.2885-15/sh0.08/e35/s640x640/34324694_225349391386450_5714965775630991360_n.jpg',
        imageAspectRatio: 'square',
        title: 'Do you know this girl',
        text: 'Hint: she is a Captain of BNK48',
        actions: [
          { label: 'Cherprang', type: 'message', text: 'She is Cherprang BNK48' },
          { label: 'Music', type: 'message', text: 'She is Music BNK48' },
          { label: 'Orn', type: 'message', text: 'She is Orn BNK48' },
        ]
      }
      lineResponse.addTemplateMessage(altText, template)
      return { lineResponse, nextDialog }

    })

    this.onText('multi message', function (user, message, session, lineResponse) {
      const nextDialog = 'MainMenuDialog'
      lineResponse.addTextMessage('Do you know?')
      lineResponse.addTextMessage('This is a multi messages response!')
      lineResponse.addTextMessage('I can send up to 4 message')
      return { lineResponse, nextDialog }
    })

    this.onText('image map', function (user, message, session, lineResponse) {
      const nextDialog = 'MainMenuDialog'
      const altText = 'Select you favorite number'
      const base_url = 'https://cidc-line-bot.herokuapp.com'
      const imageMapUrl =`${base_url}/img/meow/_`
      const size =  { width: 1080, height: 1080 }
      const action = []

      const xTile = 7
      const yTile = 7
      const stepX = Math.round(size.width / xTile)
      const stepY = Math.round(size.height / yTile)

      for ( let i = 1 ; i <= yTile ; i++ ) {
        for ( let j = 1 ; j <= xTile ; j++ ) {
          let tileNum = (yTile * (i - 1)) + j
          const currentX = Math.round(stepX * (j - 1))
          const currentY = Math.round(stepY * (i - 1))
          action.push({
            area: { x: currentX, y: currentY, width: stepX, height: stepY },
            type: 'message', text: `I choose number ${tileNum.toString()}`
          })
        }
      }
      lineResponse.addImageMapMessage(altText, imageMapUrl, size, action)
      return { lineResponse, nextDialog }
    })

    this.onText('flex', function (user, message, session, lineResponse) {
      const nextDialog = 'MainMenuDialog'
      const altText = 'This is a flex message'
      const flexMessage = {
        "type": "bubble",
        "hero": {
          "type": "image",
          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_3_movie.png",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover",
          "action": {
            "type": "uri",
            "uri": "http://linecorp.com/"
          }
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "spacing": "md",
          "contents": [
            {
              "type": "text",
              "text": "BROWN'S ADVENTURE\nIN MOVIE",
              "wrap": true,
              "weight": "bold",
              "gravity": "center",
              "size": "xl"
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "md",
              "contents": [
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                },
                {
                  "type": "text",
                  "text": "4.0",
                  "size": "sm",
                  "color": "#999999",
                  "margin": "md",
                  "flex": 0
                }
              ]
            },
            {
              "type": "box",
              "layout": "vertical",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Date",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 1
                    },
                    {
                      "type": "text",
                      "text": "Monday 25, 9:00PM",
                      "wrap": true,
                      "size": "sm",
                      "color": "#666666",
                      "flex": 4
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
                      "text": "Place",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 1
                    },
                    {
                      "type": "text",
                      "text": "7 Floor, No.3",
                      "wrap": true,
                      "color": "#666666",
                      "size": "sm",
                      "flex": 4
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
                      "text": "Seats",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 1
                    },
                    {
                      "type": "text",
                      "text": "C Row, 18 Seat",
                      "wrap": true,
                      "color": "#666666",
                      "size": "sm",
                      "flex": 4
                    }
                  ]
                }
              ]
            },
            {
              "type": "box",
              "layout": "vertical",
              "margin": "xxl",
              "contents": [
                {
                  "type": "spacer"
                },
                {
                  "type": "image",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/linecorp_code_withborder.png",
                  "aspectMode": "cover",
                  "size": "xl"
                },
                {
                  "type": "text",
                  "text": "You can enter the theater by using this code instead of a ticket",
                  "color": "#aaaaaa",
                  "wrap": true,
                  "margin": "xxl",
                  "size": "xs"
                }
              ]
            }
          ]
        }
      }
      lineResponse.addFlexMessage(altText, flexMessage)
      return { lineResponse, nextDialog }
    })

    this.onImage(function (user, message, session, lineResponse, image) {
      const nextDialog = 'MainMenuDialog'
      console.log(image)
      const original = `https://cidc-line-bot.herokuapp.com/img/i/${image}`
      const preivew = `https://cidc-line-bot.herokuapp.com/img/i/${image}/preview`
      lineResponse.addImageMessage(original, preivew)
      return { lineResponse, nextDialog }
    })

    this.onText('คำคม', function (user, message, session, lineResponse) {
      const nextDialog = 'MainMenuDialog'
      const randomQuote = Quote.getRandomQuote()
      lineResponse.addTextMessage(randomQuote)
      return { lineResponse, nextDialog }
    })

    this.onText('ขอเกม', this.game4choiceQuestionState)
    this.onText('ขอตอบ', this.game4choiceAnswerState)
    this.onText('เกมเปิดป้าย', function (user, message, session, lineResponse) {
      const nextDialog = 'GameOpenImageMainDialog'
      const altText = 'ขอต้อนรับสู่เกมเปิดป้าย'
      const template = {
        type: 'buttons',
        title: 'เกมเปิดป้าย',
        text: 'คุณกำลังมองอะไร ?',
        actions: [
          { label: 'สร้างเกมใหม่', type: 'message', text: 'สร้างเกมใหม่' },
          { label: 'เกมของฉัน', type: 'message', text: 'เกมของฉัน' }
        ]
      }
      lineResponse.addTemplateMessage(altText, template)
      return { lineResponse, nextDialog }
    })
  }

  // function
  game4choiceQuestionState(user, message, session, lineResponse) {
    const nextDialog = 'MainMenuDialog'
    const altText = 'เกมตอบคำถาม'
    let title = 'คำถามโดนใจ by ตึลตึล'
    let q = null
    if ('4_choice_game' in session['custom']) {
      q = session['custom']['4_choice_game']
      title = 'คุณยังเล่นข้อเก่าไม่จบเลย'
    } else {
      q = Question.getRandomQuestion()
      session['custom']['4_choice_game'] = q
    }

    const template = {
      type: 'buttons',
      title: title,
      text: q['question'],
      actions: [
        { label: q['choice'][0], type: 'message', text: 'ตึลตึลขอตอบ ' + q['choice'][0] },
        { label: q['choice'][1], type: 'message', text: 'ตึลตึลขอตอบ ' + q['choice'][1] },
        { label: q['choice'][2], type: 'message', text: 'ตึลตึลขอตอบ ' + q['choice'][2] },
        { label: q['choice'][3], type: 'message', text: 'ตึลตึลขอตอบ ' + q['choice'][3] },
      ]
    }
    lineResponse.addTemplateMessage(altText, template)
    return { lineResponse, nextDialog }
  }

  game4choiceAnswerState(user, message, session, lineResponse) {
    const nextDialog = 'MainMenuDialog'
    if ('4_choice_game' in session['custom']) {
      // valid state
      const answer = message.text.replace('ตึลตึลขอตอบ','').replace(/\s/g, '')
      if(answer === session['custom']['4_choice_game']['answer']) {
        delete session['custom']['4_choice_game']
        const altText = 'ยินดีด้วย'
        const template = {
          type: 'buttons',
          title: 'เก่งมาคุณตอบถูก',
          text: 'คุณยังอยากเล่นเกมต่อมั๊ย',
          actions: [
            { label: 'อยากเล่น', type: 'message', text: 'ตึลตึลขอเกม'},
            { label: 'ไม่อยากแล้ว', type: 'message', text: 'พอแค่นี้' },
          ]
        }
        lineResponse.addTemplateMessage(altText, template)
      } else {
        const q = session['custom']['4_choice_game']
        const altText = 'คุณยังตอบไม่ถูก'
        const template = {
          type: 'buttons',
          title: 'ดูเหมือนคุณยังตอบไม่ถูก',
          text: q['question'],
          actions: [
            { label: q['choice'][0], type: 'message', text: 'ตึลตึลขอตอบ ' + q['choice'][0] },
            { label: q['choice'][1], type: 'message', text: 'ตึลตึลขอตอบ ' + q['choice'][1] },
            { label: q['choice'][2], type: 'message', text: 'ตึลตึลขอตอบ ' + q['choice'][2] },
            { label: q['choice'][3], type: 'message', text: 'ตึลตึลขอตอบ ' + q['choice'][3] },
          ]
        }
        lineResponse.addTemplateMessage(altText, template)
      }
    }
    else {
      // invalid state
      const altText = 'มาเล่นกัน'
      const template = {
        type: 'buttons',
        title: 'เกมของคุณยังไม่เริ่ม',
        text: 'ดูเหมือนว่าคุณยังไม่ได้เริ่มเกมนะ จะเริ่มเลยมั๊ยละ',
        actions: [
          { label: 'เริ่มเกมเลย', type: 'message', text: 'ตึลตึลขอเกม'},
          { label: 'ยังก่อน', type: 'message', text: 'ไว้คราวหน้าละกัน' },
        ]
      }
      lineResponse.addTemplateMessage(altText, template)
    }

    return { lineResponse, nextDialog }
  }

}

module.exports = MainMenuDialog
