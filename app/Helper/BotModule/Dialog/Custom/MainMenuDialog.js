'use strict'

const MasterDailog = use('App/Helper/BotModule/Dialog/Base/MasterDialog')

class MainMenuDialog extends MasterDailog {
    constructor (user, message, session) {
        super(user, message, session)
        this.enable_nlu = true
        this.create()
    }

    nlu () {
      return 'hello'
    }

    create () {
        this.onText('math', async () => {
            this.next_dialog = 'MathDialog'
            this.response.push({
              type: 'text',
              text: 'สวัสดีนี้คือ math dialog คุณสามารถพิมพ์สมการมาได้เลยเดียวจะคิดเลขให้'
            })
        })

        this.onTextDefault(async () => {
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
