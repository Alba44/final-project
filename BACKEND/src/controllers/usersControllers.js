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

  function getOneUser (req, res) {
    const { userId } = req.params
    User.findById(userId, (error, user) => {
      error
        ? res.send('An error occured while trying to retrieve a user')
        : res.json(user)
    })
  }

  async function updateUserDetails (req, res) {
    const { userId } = req.params
    const update = req.body
    await User.findOneAndUpdate(userId, update, { new: true }, (updateError, updatedUser) => {
      updateError
        ? res.send('An error occured while trying to update the user')
        : res.json(updatedUser)
    })
  }

  return {
    createUser,
    getAllUsers,
    updateUserDetails,
    getOneUser
  }
}

module.exports = usersControllers()
