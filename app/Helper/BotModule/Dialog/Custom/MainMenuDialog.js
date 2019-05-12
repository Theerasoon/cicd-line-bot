'use strict'

const MasterDailog = use('App/Helper/BotModule/Dialog/Base/MasterDialog')

class MainMenuDialog extends MasterDailog {
    constructor (user, message, session) {
        super(user, message, session)
        this.enable_nlu = true
        this.use_nlu = true
        this.next_dialog = null
        this.create()
    }

    nlu () {
        console.log('Process NLU')
        console.log(this.message)
        if (this.message.type !== 'text') {
            console.log('Match : Text')
            return 'default'
        }
        if (!this.message.text.includes('ตึลตึล')) {
            console.log('Exclude : ตึลตึล')
            return 'default'
        }
        if (this.message.text.includes('เกมทายภาพ')) {
            console.log('Include : ตึลตึล')
            return 'image_game'
        }
        console.log('No Match')
        return 'default'
    }

    create () {
        this.onText('image_game', async () => {
            const response = [
                { type: 'text', text: 'ยินดีต้อนรับสู่เกมทายภาพ วันนี้อยากจะทำอะไรหล่ะ'}
            ]
            this.session['a'] = 'b'
            this.next_dialog = 'MainMenuDialog'
            this.response = response
            return null
        })

        this.onTextDefault(async () => {
            const response = [
                { type: 'text', text: 'ไม่มี response' }
            ]
            return "onDefault"
        })

        this.onImage(async () => {
          this.response.push({
            type: 'text',
            text: 'process image'
          })
        })
    }

}

module.exports = MainMenuDialog
