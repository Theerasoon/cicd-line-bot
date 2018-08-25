const line = require('@line/bot-sdk')

class LineResponse {
  constructor (config) {
    this.responseData = []
    this.client = new line.Client(config)
  }

  addTextMessage (text) {
    this.responseData.push({
      type: 'text',
      text
    })
  }

  addImageMessage (originalContentUrl, previewImageUrl) {
    this.responseData.push({
      type: 'image',
      originalContentUrl,
      previewImageUrl
    })
  }

  addTemplateMessage (altText, template) {
    this.responseData.push({
      type: 'template',
      altText,
      template
    })
  }

  addImageMapMessage (altText, baseUrl, baseSize, actions) {
    this.responseData.push( {
      type: 'imagemap',
      altText,
      baseUrl,
      baseSize,
      actions
    })
  }

  replyMessage (token) {
    return this.client.replyMessage(token, this.responseData).catch(err => console.error(err))
  }

  log () {
    console.log(this.responseData)
  }
}

module.exports = LineResponse
