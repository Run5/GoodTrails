'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
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
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'user_id' });
    Review.belongsTo(models.Trail, { foreignKey: 'trail_id' });
  };
  return Review;
};
