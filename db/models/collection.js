'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" },
    },
    trail_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Trails" },
    },
    visited: {
      type: DataTypes.BOOLEAN,
    },
    want_to_visit: {
      type: DataTypes.BOOLEAN,
    },
  }, {});
  Collection.associate = function(models) {
    // associations can be defined here
    Collection.belongsTo(models.User, { foreignKey: 'user_id' });
    Collection.belongsTo(models.Trail, { foreignKey: 'trail_id' });
  };
  return Collection;
};
