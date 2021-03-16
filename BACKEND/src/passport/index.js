const passport = require('passport')
require('./strategies/localStrategy')

function PassportConfig (app) {
  app.use(passport.initialize())
  app.use(passport.session()) // configuracion de sesiones

  // facilitate user data storage in the session and
  // retrieving the data on subsequent requests

  // Almacenar user en session (serializar). Se puede almacenar sólo un dato (id) o todo el user
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  // Recuperar user. Si pasaste solo el id en serialize, tienes que buscar al user en la DDBB para recuperar toda la info
  passport.deserializeUser((user, done) => {
    done(null, user)
  })
}

module.exports = PassportConfig
