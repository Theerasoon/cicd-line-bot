'use strict'

const MasterDailog = use('App/Helper/BotModule/Dialog/Base/MasterDialog')

class MainMenuDialog extends MasterDailog {
    constructor (user, message, session) {
        super(user, message, session)
        this.create()
        this.use_nlu = true
    }

    nlu () {
        if (this.message.type !== 'text') return 'default'
        if (!this.message.type.includes('ตึลตึล')) return 'default'
        if (this.messgae.text.includes('เกมทายภาพ')) return 'image_game'
    }

    create () {
        this.onText('image_game', async () => {
            console.log('image_game')
            return null
        })

        this.onTextDefault(async () => {
            console.log('default')
            return "onDefault"
        })
    }

}

module.exports = MainMenuDialog
