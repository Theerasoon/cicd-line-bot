var LineResponse = require('../utilities/LineResponse.js');
const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_SECRET,
}

const self = {
  line: {
    webhook: async function (req, res, next) {
      try {
        const event = req.body.events[0]
        let result = self.callback(event)
        res.json(result)
      } catch (err) {
        res.status(500).end()
        console.log(err.message)
        console.log(err)
      }
    }
  },
  callback: function(event) {
    let result = {}
    if (event.type != 'message') {
      return result
    }
    const lineResponse = new LineResponse(config)
    const base_url = 'https://cidc-line-bot.herokuapp.com'

    const original = 'https://instagram.fbkk1-1.fna.fbcdn.net/vp/a2a59708a2ef521c28a9137d345d882d/5BFCF4BA/t51.2885-15/sh0.08/e35/s640x640/32624069_209897666456908_4661064578824667136_n.jpg'
    const preivew = 'https://instagram.fbkk1-1.fna.fbcdn.net/vp/4811f0a2184418c4bfcb54fc755a5536/5B73E26F/t51.2885-15/e15/c0.90.720.720/s320x320/32041291_234964433776547_5995483318232023040_n.jpg'
    let altText = ''
    let template = {}

    switch(event.message.type) {
      case 'text':
      switch (event.message.text) {
        case 'text' :
          lineResponse.addTextMessage('This is a text replay from TulTul Bot!')
        break
        case 'image' :
          lineResponse.addImageMessage(original, preivew)
        break
        case 'confirm' :
          altText = 'Please Confirm you payment?'
          template = {
            type: 'confirm',
            text: 'You payment amount is $300. Do you want to pay it now?',
            actions: [
              { label: 'Sure', type: 'message', text: 'I will pay it now' },
              { label: 'Nope', type: 'message', text: 'No, not this time' },
            ]
          }
          lineResponse.addTemplateMessage(altText, template)
        break
        case 'button 1' :
          altText = 'Please choose payment methods?'
          template = {
            type: 'buttons',
            title: 'My button sample',
            text: 'Select your preferred way to pay online',
            actions: [
              { label: 'Palpay', type: 'message', text: 'I want to pay by Paypal' },
              { label: 'Credit Card', type: 'message', text: 'I want to pay by credit card' },
              { label: 'Learn more', type: 'uri', uri: 'https://en.wikipedia.org/wiki/E-commerce_payment_system' },
            ]
          }
          lineResponse.addTemplateMessage(altText, template)
        break
        case 'button 2' :
          altText = 'Who am I?'
          template = {
            type: 'buttons',
            thumbnailImageUrl: 'https://instagram.fbkk1-1.fna.fbcdn.net/vp/2d569d7624cc1df485c6486b1373f967/5BF425D6/t51.2885-15/sh0.08/e35/s640x640/34324694_225349391386450_5714965775630991360_n.jpg',
            imageAspectRatio: 'square',
            title: 'Do you know who am I?',
            text: 'Select your preferred way to pay online',
            actions: [
              { label: 'Cherprang', type: 'message', text: 'She is Cherprang BNK48' },
              { label: 'Orn', type: 'message', text: 'She is Orn BNK48' },
              { label: 'Korn', type: 'message', text: 'She is Korn BNK48' },
            ]
          }
          lineResponse.addTemplateMessage(altText, template)
        break
        case 'image map' :
          altText = 'Select you favorite number'
          let imageMapUrl =`${base_url}/img/meow`
          let size =  { width: 1080, height: 1080 }
          let action = [
            { area: { x: 0, y: 0, width: 540, height: 540 }, type: 'uri', linkUri: 'https://store.line.me/family/manga/en' },
            { area: { x: 540, y: 0, width: 540, height: 540 }, type: 'uri', linkUri: 'https://store.line.me/family/music/en' },
            { area: { x: 0, y: 540, width: 540, height: 540 }, type: 'uri', linkUri: 'https://store.line.me/family/play/en' },
            { area: { x: 540, y: 540, width: 540, height: 540 }, type: 'message', text: 'URANAI!' },
          ]
          lineResponse.addImageMapMessage(altText, imageMapUrl, size, action)
        break
        case 'multi' :
          lineResponse.addTextMessage('This is a multi message from TulTul Bot!')
          lineResponse.addImageMessage(original, preivew)
        break
        default :
          lineResponse.addTextMessage(event.message.text)
        break
      }
      break
    }
    result = lineResponse.replyMessage(event.replyToken)
    return result
  },
}

module.exports = self
