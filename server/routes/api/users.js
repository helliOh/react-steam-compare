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
        include : { model : Game, as : 'Game' } },
    });
    res.send(users);
  } catch(e) {
    console.log(e);
    res.status(300).send({success:false, message:"failed"});
  }
});

module.exports = router;
