const { Router } = require('express')
const { createUser, getAllUsers } = require('../controllers/usersControllers')

function usersRouter () {
  const router = Router()

  router
    .route('/')
    .post(createUser)
    .get(getAllUsers)

  return router
}

module.exports = usersRouter()
