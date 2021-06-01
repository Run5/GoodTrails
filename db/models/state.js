'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    state_code: {
      allowNull: false,
      type: DataTypes.STRING(2),
    },
    state_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});
  State.associate = function(models) {
    // associations can be defined here
    State.hasMany(models.Trail, { foreignKey: 'state_id' });
  };
  return State;
};
