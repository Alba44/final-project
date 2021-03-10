const passport = require('passport')
const { Strategy } = require('passport-local')
const User = require('../../models/userModel')

function LocalStrategy () {
  passport.use(new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    (email, password, done) => {
      (async () => {
        User.findOne({ email }, (error, user) => {
          if (error) { return done(error) }
          if (!user) {
            return done(null, false, { message: 'Incorrect email' })
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password' })
          }
          return done(null, user)
        })
      })()
    }
  ))
}

module.exports = LocalStrategy
