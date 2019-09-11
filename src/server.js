const express = require('express')

class App {
  constructor () {
    this.express = express()
    // eslint-disable-next-line semi
    this.isDev = process.env.NODE_ENV !== 'production';
    this.middleware()
    this.routes()
  }

  middleware () {
    this.express.use(express.urlencoded({ extended: false }))
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
