module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    image: DataTypes.STRING
  })
  return User
  // eslint-disable-next-line semi
};
