'use strict'

const MasterDailog = use('App/Helper/BotModule/Dialog/Base/MasterDialog')

class MathDialog extends MasterDailog {
    constructor (user, message, session) {
        super(user, message, session)
        this.create()
    }

    create () {
        this.onTextDefault(async () => {
            this.next_dialog = null
            let text = eval(this.message.text)
            this.response.push({
              type: 'text',
              text: `บวกเลขให้แล้วจ้า ${this.message.text} = ${text}`
            })
            return "onDefault"
        })
    }

}

module.exports = MathDialog
