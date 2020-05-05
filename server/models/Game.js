'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    appid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    developer : DataTypes.STRING,
    publisher : DataTypes.STRING,
    positive : DataTypes.INTEGER,
    negative : DataTypes.INTEGER,
    owners: DataTypes.STRING,
    average_forever: DataTypes.INTEGER,
    image : DataTypes.STRING
  }, { timestamps: true });
  
  Game.associate = function(models) {
    Game.hasMany(models.UserGame, { as: 'Owners'});
  };

  return Game;
};
