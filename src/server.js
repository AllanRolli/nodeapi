const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')
const nunjucks = require('nunjucks')
const path = require('path')

class App {
  constructor () {
    this.express = express()
    // eslint-disable-next-line semi
    this.isDev = process.env.NODE_ENV !== 'production';
    this.middleware()
    this.views()
    this.routes()
  }

  middleware () {
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(
      session({
        secret: 'MyAppSecret',
        resave: false,
        saveUninitialized: false
      })
    )
  }

  views () {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })

    this.express.use(express.static(path.resolve(__dirname, 'public')))
    this.express.set('view engine', 'njk')
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
