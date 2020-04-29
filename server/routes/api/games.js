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
    let games = await Game.findAll({
      limit: 100,
      offset: 0
    });
    res.send(games);
  } catch(e) {
    console.log(e);
    res.status(300).send({success:false, message:"failed"});
  }
});

router.get('/count', async (req, res, next) => {
  try {
    let games = await Game.findAll({
      attributes : [[sequelize.fn('COUNT', '*'), 'count']]
    });

    res.send(games[0]);
  } catch(e) {
    console.log(e);
    res.status(300).send({success:false, message:"failed"});
  }
});

router.get('/owners', async (req, res, next) => {
  try {
    let games = await Game.findAll({
      subQuery : false,
      include : { 
        model : UserGame, 
        as : 'Owners', 
        required : true,
        include : { model : User, as : 'User' } },
    });

    res.send(games);
  } catch(e) {
    console.log(e);
    res.status(300).send({success:false, message:"failed"});
  }
});

module.exports = router;
