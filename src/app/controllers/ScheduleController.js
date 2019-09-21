const { User, Appointment } = require('../models')

class ScheduleController {
  async index (req, res) {
    const providers = await User.findByPk(req.params.provider)
    const appointments = await Appointment.findAll({
      where: {
        provider_id: providers.id
      }
    })
    console.log(appointments)
    return res.render('schedule/dates', { appointments })
  }
}

module.exports = new ScheduleController()
