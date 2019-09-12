const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const UserController = require('./app/controllers/UserController')

routes.post('/fornecedores', upload.single('image'), UserController.create)

module.exports = routes
