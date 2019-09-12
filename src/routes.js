const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')

routes.get('/fornecedores', UserController.create)
routes.post('/fornecedores', UserController.create)

module.exports = routes
