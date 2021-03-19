const { Router } = require('express')
const { createUser, getAllUsers, updateUserDetails, getOneUser } = require('../controllers/usersControllers')

function usersRouter () {
  const router = Router()

  router
    .route('/')
    .post(createUser)
    .get(getAllUsers)
    .put(updateUserDetails)

  router
    .route('/:id')
    .get(getOneUser)

  return router
}

module.exports = usersRouter()
