const { Router } = require('express')
const { createUser, getAllUsers, updateUserDetails, getOneUser } = require('../controllers/usersControllers')

function usersRouter () {
  const router = Router()

  router
    .route('/')
    .post(createUser)
    .get(getAllUsers)

  router
    .route('/:userId')
    .get(getOneUser)
    .put(updateUserDetails)

  return router
}

module.exports = usersRouter()
