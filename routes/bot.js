var express = require('express')
var router = express.Router()
var database = require('../utilities/Database.js')
var controllers = require('../controllers/BotController.js')
var middlewares = {
  webhook: require('../middlewares/webhooklog.js')
}

// router.post('/webhook',middlewares.webhook.log, controllers.line.webhook )
router.post('/webhook', controllers.line.webhook )


module.exports = router;
