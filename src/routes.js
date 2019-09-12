const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const FileController = require('./app/controllers/FileController')

routes.get('/files/:files', FileController.show)
routes.post('/fornecedores', upload.single('image'), UserController.create)

module.exports = routes
