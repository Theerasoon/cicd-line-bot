'use strict'
const LineHook = use('App/models/LineHook')
const MainMenuDialog = use('App/Helper/BotModule/Dialog/Custom/MainMenuDialog')

class WebhookController {
    async line({ request, response }) {
        // const linehook = LineHook.create(request.all())
        // response.send(linehook.toJSON())


        const events = request.all()['events']
        const user = events[0]['source']
        const message = events[0]['message']
        const session = {"k":"v"}
        const md = new MainMenuDialog(user, message, session)
        const r = await md.action()
        console.log(r)
        response.send("OIK")


    }
}

module.exports = WebhookController
