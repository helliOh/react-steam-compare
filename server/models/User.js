'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    steamid: DataTypes.STRING,
    nickname: DataTypes.STRING
  }, { timestamps: true });
  
  User.associate = function(models) {
    User.hasMany(models.UserGame, { as: 'Library'});
  };

  return User;
};
