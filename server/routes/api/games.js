const express = require('express');
const sequelize = require('sequelize');
const Op = require('sequelize').Op;

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
    let games = await Game.findAndCountAll({
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


router.get('/owners', async (req, res, next) => {
  const LIMIT = 10;

  let { page, search, order } = req.query;
  
  page = page ? page : 1;

  try {
    let games = await Game.findAndCountAll({
      subQuery : false,
      include : { 
        model : UserGame, as : 'Owners',
        include : { 
          model : User, as : 'User',
          required: true
        },
        required : false
      },
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
      where : {
        '$Owners.id$' : {
          [Op.ne] : null
        }
      }
    });
    // console.log(games.rows.map(game => game.name));
    res.send(games);
  } catch(e) {
    console.log(e);
    res.status(300).send({success:false, message:"failed"});
  }
});

module.exports = router;
