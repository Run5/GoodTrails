'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(20),
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(255),
    },
    hashed_password: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Review, { foreignKey: 'user_id' });
    User.hasMany(models.Collection, { foreignKey: 'user_id' });
  };
  return User;
};
