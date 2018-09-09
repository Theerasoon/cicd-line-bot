const line = require('@line/bot-sdk')
const fs = require('fs');
const path = require('path');

class LineResponse {
  constructor (config) {
    this.responseData = []
    this.client = new line.Client(config)
  }

  getResponseDate() {
    return this.responseData
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

  async downloadContent (messageId, dowloadPath) {
    try {
      const stream = await this.client.getMessageContent(messageId)
      const writable = fs.createWriteStream(dowloadPath)
      stream.pipe(writable)
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = LineResponse
