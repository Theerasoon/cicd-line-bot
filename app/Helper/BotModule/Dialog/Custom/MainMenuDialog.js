'use strict'

const MasterDailog = use('App/Helper/BotModule/Dialog/Base/MasterDialog')

class MainMenuDialog extends MasterDailog {
    constructor (user, message, session) {
        super(user, message, session)
        this.create()
        this.xxx = "XXX"
    }

    create () {
        this.onText("aaa", async () => {
            console.log(this.user)
            console.log(this.message)
            console.log(this.session)
            return "onText A"
        })

        this.onTextDefault(async () => {
            return "onDefault"
        })
    }

}

module.exports = MainMenuDialog
