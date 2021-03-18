const { Router } = require('express')
const { createUser, getAllUsers, updateUserDetails } = require('../controllers/usersControllers')

function usersRouter () {
  const router = Router()

  router
    .route('/')
    .post(createUser)
    .get(getAllUsers)
    .put(updateUserDetails)

  return router
}

module.exports = usersRouter()
