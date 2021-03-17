const express = require('express')
const morgan = require('morgan')
const debug = require('debug')('app')
const { connect } = require('mongoose')
const session = require('express-session')
const chalk = require('chalk')
require('dotenv').config()
const usersRouter = require('./src/routers/usersRouter')
const booksRouter = require('./src/routers/booksRouter')
const authRouter = require('./src/routers/authRouter')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000
const localhost = process.env.LOCALHOST
const DDBB = process.env.DDBB_URL

connect(DDBB, { useUnifiedTopology: true, useNewUrlParser: true })

app.use(morgan('dev'))

app.use(cors())
app.use(express.json())
app.use(session({
  secret: 'bookShare',
  resave: true, // en cada peticion, aunque la sesión no haya sido modificada, se va a volver a guardar
  saveUninitialized: true // si inicializamos una sesión en una peticion y no le guardamos nada, igual se guarda
}))

require('./src/passport')(app) // configuración serialize y deserialize

app.use('/api/users', usersRouter)
app.use('/api/books', booksRouter)
app.use('/authenticate', authRouter)

app.listen(port, () => {
  debug(`Server is running in ${chalk.yellow(`${localhost}${port}`)}`)
})
