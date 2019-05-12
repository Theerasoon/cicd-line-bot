'use strict'
const _ = require('lodash')

const LineHook = use('App/models/LineHook')
const Session = use('App/models/Session')
const MainMenuDialog = use('App/Helper/BotModule/Dialog/Custom/MainMenuDialog')

class WebhookController {
    async line({ request, response }) {
        // const linehook = LineHook.create(request.all())
        console.dir(request.all(), { depth: null })

        const events = request.all()['events']
        const user = events[0]['source']
        const message = events[0]['message']
        const session_model = await Session.where({ 'session_id': user['userId'] }).first()
        const session_data = session_model === null ? {} : session_model.toJSON()

        console.log('------------------------------------------------------------')
        console.log(session_data)
        console.log('------------------------------------------------------------')

        let dialog = null
        if (session_data.next_dialog) {
            const DialogClass = use(`App/Helper/BotModule/Dialog/Custom/${session_data.next_dialog}`)
            dialog = new DialogClass(user, message, session_data)
        }
        else {
            dialog = new MainMenuDialog(user, message, session_data)
        }
        await dialog.action()

        console.log(session_data)
        console.log(dialog.next_dialog)

        if (dialog.next_dialog !== null) {
            if (session_data._id === undefined) {
                Session.create({
                    session_id: user['userId'],
                    data: session_data,
                    next_dialog: dialog.next_dialog
                })
            }
            else {
                session_model.data = session_data
                session_model.next_dialog = dialog.next_dialog
                session_model.save()
            }
        }
        else {
            if (session_data._id !== undefined) {
                session_model.delete()
            }
        }

        response.send(dialog.response)
    }
}

module.exports = WebhookController