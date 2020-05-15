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
  const LIMIT = 100;

  let { page, search, order } = req.query;

  page = page ? page : 1;
  search = search ? search : '';
  order = order ? order : { name : 'createdAt', type : 'desc' };

  try {
    let games = await Game.findAll({
      where : {
        name : sequelize.literal(`Game.name like '%${search}%'`)
      },
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
      order : sequelize.literal(`Game.${order.name} ${order.type}`)
    });

    res.send(games);
  } catch(e) {
    console.log(e);
    res.status(300).send({success:false, message:"failed"});
  }
});

router.get('/count', async (req, res, next) => {
  let { search } = req.query;

  search = search ? search : '';

  try {
    let games = await Game.findAll({
      where : {
        name : sequelize.literal(`Game.name like '%${search}%'`)
      },
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
        include : { model : User, as : 'User' }
      }
    });

    res.send(games);
  } catch(e) {
    console.log(e);
    res.status(300).send({success:false, message:"failed"});
  }
});

router.get('/owners/count', async (req, res, next) => {
  try {
    let games = await Game.findAll({
      subQuery : false,
      include : { 
        model : UserGame, 
        as : 'Owners', 
        required : true,
        include : { model : User, as : 'User' }
      },
      attributes : [[sequelize.fn('COUNT', '*'), 'count']]
    });

    res.send(games);
  } catch(e) {
    console.log(e);
    res.status(300).send({success:false, message:"failed"});
  }
});

module.exports = router;
