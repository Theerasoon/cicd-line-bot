'use strict'

const fs = require('fs')
const uuidv4 = require('uuid/v4')
const LineSDK = require('@line/bot-sdk')

const Moment = use('moment')
const Env = use('Env')

class MasterDialog {
    constructor (user, message, session) {
        this.user = user
        this.enable_nlu = false
        this.message = message
        this.session = session
        this.next_dialog = null
        this.response = []
        this.event = {
            onText: {},
            onTextDefault : {},
            onImage: {}
        }
    }

    onText (trigger, callback) {
        this.event.onText[trigger] = callback
    }

    onTextDefault (callback) {
        this.event.onTextDefault = callback
    }

    onImage (callback) {
        this.event.onImage = callback
    }

    async action () {
        switch(this.message.type) {
            case 'text' :
                let trigger = this.message.text
                if (this.enable_nlu) {
                  trigger = this.nlu()
                }
                let textEvent = this.event.onText[trigger]
                if (textEvent !== undefined) {
                    return this.event.onText[trigger]()
                } else {
                    return this.event.onTextDefault()
                }
            break
            case 'image' :
                const config = {
                    channelAccessToken: Env.get('LINE_CHANNEL_ACCESS_TOKEN'),
                    channelSecret: Env.get('LINE_CHANNEL_SECRET')
                }
                const line_client = new LineSDK.Client(config)

                const now = Moment().format("YYYYMMDD")
                const filename = Buffer.from(uuidv4())
                const base64_filename = filename.toString('base64')
                const tmp_file = `tmp/${base64_filename}.jpg`

                const stream = await line_client.getMessageContent(this.message.id)
                const writable = fs.createWriteStream(tmp_file)
                stream.pipe(writable)
                stream.on('end', () => {
                    console.log('Save download content to drive')
                })

                return this.event.onImage()
            break
        }
    }



}

module.exports = MasterDialog
