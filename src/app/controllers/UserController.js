const { User } = require('../models')
class UserController {
  create (req, res) {}
  async store (req, res) {
    const { filename: image } = req.file
    await User.create({ ...req.body, image })
  }
}
module.exports = new UserController()
