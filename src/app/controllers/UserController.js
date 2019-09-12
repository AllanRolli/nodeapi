const { User } = require('../models')
class UserController {
  create (req, res) {
    return res.body
  }

  store (req, res) {
    const { filename: image } = req.file
    User.create({ ...req.body, image })

    return User.create(res.send('teste'))
  }
}
module.exports = new UserController()
