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

  async function updateUserDetails (req, res) {
    const filter = { email: req.body.email }
    const update = req.body
    await User.findOneAndUpdate(filter, update, { new: true }, (updateError, updatedUser) => {
      if (updateError) {
        res.status(404)
        res.send('An error occured while trying to update the user')
      } else {
        res.json(updatedUser)
      }
    })
  }

  return {
    createUser,
    getAllUsers,
    updateUserDetails
  }
}

module.exports = usersControllers()
