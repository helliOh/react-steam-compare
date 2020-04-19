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
    let games = await Game.findAll();
    res.send(games);
  } catch(e) {
    console.log(e);
    res.status(300).send({success:false, message:"failed"});
  }
});

router.get('/distinct', async (req, res, next) => {
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

router.get('/:id(\\d+)', async (req, res, next) => {
  try {
    let game = await Game.findOne({where : { id : req.params.id } });
    res.send(game);
  } catch(e) {
    console.log(e);
    res.status(300).send({success:false, message:"failed"});
  }
});

module.exports = router;
