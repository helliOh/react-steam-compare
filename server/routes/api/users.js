const express = require('express');
const sequelize = require('sequelize');

const models = require('../../models');

const {
  Game,
  User,
  UserGame
} = models;

var router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    let users = await User.findAll({});
    res.send(users);
  } catch(e) {
    console.log(e);
    res.status(300).send({success:false, message:"failed"});
  }
});

router.get('/library', async (req, res, next) => {
  try {
    let users = await User.findAll({
      subQuery : false,
      include : { 
        model : UserGame, 
        as : 'Library', 
        required : true,
        include : { model : Game, as : 'Game'}
      },
      order : [
        ['id', 'asc'],
        [{ model : UserGame, as : 'Library'}, 'playtime_forever', 'desc']
      ]
    });

    for(let i=0; i<users.length; i++){
      let user = users[i];
      const { Library } = user;

      let gameCount = Library.length;
      let gameNames = Library.map(userGame => userGame.Game).map(game => game.name);
      let totalPlaytime = Library.map(game => game.playtime_forever).reduce((cur, acc) => cur + acc);
      let totalPrice = Library.map(userGame => userGame.Game).map(game => Number(game.price)).reduce((cur, acc) => cur + acc);
      totalPrice = Math.round(totalPrice / 100);

      user.setDataValue('Statistics', {
        gameCount : gameCount,
        gameNames : gameNames,
        totalPlaytime : totalPlaytime,
        totalPrice : totalPrice
      });
    }

    res.send(users);
  } catch(e) {
    console.log(e);
    res.status(300).send({success:false, message:"failed"});
  }
});

module.exports = router;
