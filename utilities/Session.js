const database = require('../utilities/Database.js');
const connection = { db: 'Bot', collection: 'Session' }
const moment = require('moment')

class Session {
    constructor(sessionId) {
        this.query = {
            'system.sessionId': sessionId
        } 
        this.empty = true
        this.sessionData = {
            system: {},
            custom: {}
        }
    }

    async load() {
        try {
            const queryResult = await database.find(this.query, connection)
            const sessionData = queryResult.pop()
            if (sessionData === undefined) {
                this.sessionData.system.sessionId = this.query['system.sessionId']
            } else {
                this.sessionData = sessionData
                this.empty = false
            }
        }
        catch (err) {
            console.log(err.message)
            console.log(err)
        }
    }

    async update(data) {
        try {
            data.system.lastModified = moment().format('Y-MM-DD HH:mm:ss.SSS')
            database.update(this.query, data, connection)
        } catch (err) {
            console.log(err.message)
            console.log(err)
        }
    }

    async destroy() {
        try {
            database.delete(this.query, connection)
        } catch (err) {
            console.log(err.message)
            console.log(err)
        } 
    }

    isEmpty() {
        return this.empty
    }

    get() {
        return this.sessionData
    }
}

module.exports = Session