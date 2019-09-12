const { User } = require('../models')
class UserController {
  create (req, res) {}
  async store (req, res) {
    await User.create(req.body)
  }
}
module.exports = new UserController()
