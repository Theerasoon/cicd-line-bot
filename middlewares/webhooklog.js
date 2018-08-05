const database = require('../utilities/Database.js');
const connection = { db: 'Bot', collection: 'Webhook' }

module.exports = {
  log: async function (req) {
    database.save(req.body, connection)
  }
}
