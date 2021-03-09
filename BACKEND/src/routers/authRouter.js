const { Router } = require('express')
const passport = require('passport')
const controller = require('../controllers/authControllers')

function authRouter () {
  const router = Router()

  router
    .route('/register')
    .post(controller.register)

  router
    .route('/login')
    .post(
      passport.authenticate('local'),
      controller.login
    )

  return router
}

module.exports = authRouter()
