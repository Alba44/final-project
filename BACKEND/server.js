const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const debug = require('debug')('app')
const chalk = require('chalk')

const SocketEvents = require('./src/chat/socket')
const Routes = require('./src/routers/routes')
const AppConfig = require('./src/chat/app-config')

class Server {
  constructor () {
    this.app = express()
    this.http = http.Server(this.app)
    this.socket = socketio(this.http)
  }

  appConfig () {
    new AppConfig(this.app).includeConfig()
  }

  /* Including app Routes starts */
  includeRoutes () {
    new Routes(this.app).routesConfig()
    new SocketEvents(this.socket).socketConfig()
  }

  /* Including app Routes ends */
  appExecute () {
    this.appConfig()
    this.includeRoutes()

    const port = process.env.PORT || 5000
    const host = process.env.LOCALHOST

    this.http.listen(port, host, () => {
      debug(`Server is running in ${chalk.yellow(`${host}${port}`)}`)
    })
  }
}

const app = new Server()
app.appExecute()
