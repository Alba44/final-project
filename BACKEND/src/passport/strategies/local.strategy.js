const passport = require('passport')
const { Strategy } = require('passport-local')
const User = require('../../models/userModel')

function LocalStrategy () {
  passport.use(new Strategy( // recibe options y el verify callback
    {
      usernameField: 'email', // los valores que estés mandando del front, puedes configurarlos
      passwordField: 'password'
    },
    (email, password, done) => { // verify callback. DONE envía en resultado del proceso de autentificación
      (async () => {
        User.findOne({ email }, (error, user) => {
          if (error) { return done(error) }
          if (!user) {
            console.log('Incorrect email')
            return done(null, false, { message: 'Incorrect email' }) // no hay error, pero no se encuentra el usuario
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password' })
          }
          return done(null, user) // user es el objeto con la información del usuario logueado
        })
      })()
    }
  ))
}

module.exports = LocalStrategy
