module.exports = (sequelize, Datataypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: Datataypes.DATE
  })

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreignkey: 'user_id' })
    Appointment.belongsTo(models.User, { foreignkey: 'provider_id' })
    // eslint-disable-next-line semi
  };

  return Appointment
  // eslint-disable-next-line semi
};
