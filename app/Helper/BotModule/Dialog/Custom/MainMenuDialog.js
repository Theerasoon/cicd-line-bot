'use strict'

const MasterDailog = use('App/Helper/BotModule/Dialog/Base/MasterDialog')

class MainMenuDialog extends MasterDailog {
    constructor (user, message, session) {
        super(user, message, session)
        this.create()
    }

    create () {
        this.onText('math', async () => {
            return "onText A"
        })

        this.onTextDefault(async () => {
            return "onDefault"
        })
    }

}

module.exports = MainMenuDialog
