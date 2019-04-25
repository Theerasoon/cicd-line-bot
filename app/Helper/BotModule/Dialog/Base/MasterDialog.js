'use strict'

class MasterDialog {
    constructor (user, message, session) {
        this.user = user
        this.message = message
        this.session = session
        this.event = {
            onText: {},
            onTextDefault : {}
        }
    }

    onText (trigger, callback) {
        console.log("On text : " + trigger)
        this.event.onText[trigger] = callback
    }

    onTextDefault (callback) {
        this.event.onTextDefault = callback
    }

    action () {
        switch(this.message.type) {
            case 'text' : 
                let trigger = this.message.text
                let textEvent = this.event.onText[trigger]
                if (textEvent !== undefined) {
                    return this.event.onText[trigger]()
                } else {
                    return this.event.onTextDefault()
                }
            break
        }
    }



}

module.exports = MasterDialog
