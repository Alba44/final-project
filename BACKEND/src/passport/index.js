const passport = require('passport')
require('./strategies/localStrategy')

function PassportConfig (app) {
  app.use(passport.initialize())
  app.use(passport.session())

  // facilitate user data storage in the session and
  // retrieving the data on subsequent requests

  // Almacenar user en session (serializar)
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  // Recuperar user
  passport.deserializeUser((user, done) => {
    done(null, user)
  })
}

module.exports = PassportConfig
