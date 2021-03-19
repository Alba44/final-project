const User = require('../models/userModel')

function authControllers () {
  function register (req, res) {
    const { email, password } = req.body
    const user = new User({
      email,
      password
    })

    try {
      user.save()

      req.login(user, () => {
        res.redirect('/api/users')
      })
    } catch (error) {
      res.status(500)
      res.send(error)
    }
  }

  async function login (req, res) {
    res.status(200)
    const filter = { ...req.body }
    await User.findOne(filter, (error, user) => {
      error
        ? res.send('An error occured while trying to create a user')
        : res.json(user)
    })
  }

  return {
    register,
    login
  }
}

module.exports = authControllers()
