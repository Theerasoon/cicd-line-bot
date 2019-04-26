'use strict'
const LineHook = use('App/models/LineHook')
const Session = use('App/models/Session')
const MainMenuDialog = use('App/Helper/BotModule/Dialog/Custom/MainMenuDialog')

class WebhookController {
    async line({ request, response }) {
        // const linehook = await LineHook.create(request.all())
        // response.send(linehook.toJSON())

        const events = request.all()['events']
        const user = events[0]['source']
        const message = events[0]['message']

        let session_model = await Session.where({'id': user['userId']}).first()
        let session = {}
        if(session_model === null) {
          session_model = await Session.create({
            id: user['userId'],
            data: {}
          })
        } else {
          session = session_model.toJSON()['data']
        }

        const md = new MainMenuDialog(user, message, session)
        const r = await md.action()

        session_model.id = user['userId']
        session_model.data = session
        session_model.save()

        response.send('OK')

    }
}

module.exports = WebhookController
