var MasterDialog = require('./MasterDialog.js')

class MainMenuDialog extends MasterDialog {
  constructor(user, message, session) {
    super(user, message, session)
    this.config()
    this.create()
  }

  textProcessing(message) {
    return message
  }

  config() {
    super.config()
    this.config.useTextProcessing = false
  }

  create() {

    this.onTextDefault(function(user, message, session, lineResponse) {
      lineResponse.addTextMessage(message.text)
      return { lineResponse }
    })

    this.onText('text', function (user, message, session, lineResponse) {
      lineResponse.addTextMessage('This is a text response!')
      return { lineResponse }
    })

    this.onText('image', function (user, message, session, lineResponse) {
      const original = 'https://instagram.fbkk1-1.fna.fbcdn.net/vp/a2a59708a2ef521c28a9137d345d882d/5BFCF4BA/t51.2885-15/sh0.08/e35/s640x640/32624069_209897666456908_4661064578824667136_n.jpg'
      const preivew = 'https://instagram.fbkk1-1.fna.fbcdn.net/vp/4811f0a2184418c4bfcb54fc755a5536/5B73E26F/t51.2885-15/e15/c0.90.720.720/s320x320/32041291_234964433776547_5995483318232023040_n.jpg'
      lineResponse.addImageMessage(original, preivew)
      return { lineResponse }
    })

    this.onText('button 1', function (user, message, session, lineResponse) {
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
      return { lineResponse }
    })

    this.onText('button 2', function (user, message, session, lineResponse) {
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
      return { lineResponse }
    })

    this.onText('multi message', function (user, message, session, lineResponse) {
      lineResponse.addTextMessage('Do you know?')
      lineResponse.addTextMessage('This is a multi messages response!')
      lineResponse.addTextMessage('I can send up to 4 message')
      return { lineResponse }
    })

    this.onText('image map', function (user, message, session, lineResponse) {
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
      return { lineResponse }
    })
  }
}

module.exports = MainMenuDialog
