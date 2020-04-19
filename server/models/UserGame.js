'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGame = sequelize.define('UserGame', {
    playtime_forever: DataTypes.INTEGER
  }, { timestamps: true });
  UserGame.associate = function(models) {
    // associations can be defined here
    UserGame.belongsTo(models.User, { as: 'User'});
    UserGame.belongsTo(models.Game, { as: 'Game'});
  };
  return UserGame;
};
