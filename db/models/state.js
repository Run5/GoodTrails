'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    state_code: DataTypes.STRING,
    state_name: DataTypes.STRING
  }, {});
  State.associate = function(models) {
    // associations can be defined here
  };
  return State;
};