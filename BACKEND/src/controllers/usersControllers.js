const User = require('../models/userModel')

function usersControllers () {
  function createUser ({ body }, res) {
    User.create(body, (error, newUser) => (
      error
        ? res.send('An error occured while trying to create a user')
        : res.json(newUser)
    ))
  }

  async function getAllUsers (req, res) {
    const allUsers = await User.find({})

    res.json(allUsers)
  }

  return {
    createUser,
    getAllUsers
  }
}

module.exports = usersControllers()
