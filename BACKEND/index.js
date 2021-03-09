const express = require('express')
const morgan = require('morgan')
const debug = require('debug')('app')
const { connect } = require('mongoose')
const chalk = require('chalk')
require('dotenv').config()
const usersRouter = require('./src/routers/usersRouter')
const booksRouter = require('./src/routers/booksRouter')
const authRouter = require('./src/routers/authRouter')

const app = express()
const port = process.env.PORT || 5000
const localhost = process.env.LOCALHOST
const DDBB = process.env.DDBB_URL

connect(DDBB, { useUnifiedTopology: true, useNewUrlParser: true })

app.use(morgan('dev'))

app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/books', booksRouter)
app.use('/authenticate', authRouter)

const auth = () => {
  return (req, res, next) => {
    next()
  }
}

app.listen(port, () => {
  debug(`Server is running in ${chalk.yellow(`${localhost}${port}`)}`)
})
