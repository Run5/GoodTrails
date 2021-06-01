'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trail = sequelize.define('Trail', {
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    length: DataTypes.NUMERIC,
    difficulty: DataTypes.DECIMAL,
    state_id: DataTypes.INTEGER,
    cross_state: DataTypes.BOOLEAN
  }, {});
  Trail.associate = function(models) {
    // associations can be defined here
  };
  return Trail;
};
