const database = require('../utilities/Database.js');
const connection = { db: 'Bot', collection: 'Webhook' }

module.exports = {
  log: function (req, res, next) {
    try {
      database.save(req.body, connection)
    }
    catch (err) {
      console.log(err.message)
      console.log(err)
    }
    next();
  }
}
