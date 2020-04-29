'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    appid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    developer : DataTypes.STRING,
    publisher : DataTypes.STRING,
    positive : DataTypes.STRING,
    negative : DataTypes.STRING,
    owners: DataTypes.STRING,
    average_forever: DataTypes.STRING,
    image : DataTypes.STRING
  }, { timestamps: true });
  
  Game.associate = function(models) {
    Game.hasMany(models.UserGame, { as: 'Owners'});
  };

  return Game;
};
