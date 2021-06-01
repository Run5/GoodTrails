'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    user_id: DataTypes.INTEGER,
    trail_id: DataTypes.INTEGER,
    visited: DataTypes.BOOLEAN,
    want_to_visit: DataTypes.BOOLEAN
  }, {});
  Collection.associate = function(models) {
    // associations can be defined here
  };
  return Collection;
};