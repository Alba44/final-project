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

  function login (req, res) {
    res.status(200)
    res.json(req.body)
  }

  return (
    register,
    login
  )
}

module.exports = authControllers()
