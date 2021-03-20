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

  async function getOneUser (req, res) {
    const { userId } = req.params
    try {
      const user = await User.findById(userId)
        .populate('books')
      res.json(user)
    } catch (error) {
      res.status(500)
      res.send('An error occured while trying to retrieve a user')
    }
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

  async function addBookToUser (req, res) {
    const { userId } = req.params
    try {
      const user = await User.findById(userId)
      let { books } = user
      if (!books) {
        books = []
      }
      books.push(req.body.books)
      const updateUser = await User.findByIdAndUpdate(userId, { books })
      res.json(updateUser)
    } catch (error) {
      res.status(500)
      res.send('An error occured while trying to add a book to user')
    }
  }

  return {
    createUser,
    getAllUsers,
    updateUserDetails,
    getOneUser,
    addBookToUser
  }
}

module.exports = usersControllers()
