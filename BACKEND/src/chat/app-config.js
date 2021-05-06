/* eslint-disable new-cap */
const expressConfig = require('./express-config')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

class AppConfig {
  constructor (app) {
    dotenv.config()
    this.app = app
  }

  includeConfig () {
    this.app.use(
      bodyParser.json()
    )
    this.app.use(
      cors()
    )
    // eslint-disable-next-line no-new
    new expressConfig(this.app)
  }
}
module.exports = AppConfig
