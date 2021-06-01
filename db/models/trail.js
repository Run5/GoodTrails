'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trail = sequelize.define('Trail', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    img: {
      type: DataTypes.STRING,
    },
    length: {
      allowNull: false,
      type: DataTypes.NUMERIC,
    },
    difficulty: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    state_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "States" },
    },
    cross_state: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
  }, {});
  Trail.associate = function(models) {
    // associations can be defined here
    Trail.belongsTo(models.State, { foreignKey: 'state_id' });
    Trail.hasMany(models.Review, { foreignKey: 'trail_id' });
    Trail.hasMany(models.Collection, { foreignKey: 'trail_id' });
  };
  return Trail;
};
