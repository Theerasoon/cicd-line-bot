'use strict'
const LineHook = use('App/models/LineHook')

class WebhookController {
    async line({ request, response }) {
        const linehook = await LineHook.create(request.all())
        response.send(linehook.toJSON())
    }
}

module.exports = WebhookController
