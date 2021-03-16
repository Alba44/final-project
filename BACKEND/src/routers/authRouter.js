const { Router } = require('express')
const passport = require('passport')
const { register, login } = require('../controllers/authControllers')

function authRouter () {
  const router = Router()

  router
    .route('/register')
    .post(register)

  router
    .route('/login')
    .post(
      passport.authenticate('local'), // middleware y nombre de la estrategia
      login
    )

  return router
}

module.exports = authRouter()
