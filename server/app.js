const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const compress = require('compression');

const sequelize = require('./models/index').sequelize;
const models = require('./models');
const router = require('./routes');

const Steam = require('./lib/steam');

const {
  Game,
  User,
  UserGame
} = models;

const port = 4000;
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(compress());

router(app);

if(process.env.FORCE) {
  sequelize.sync({force:true}).then(async ()=>{
    await Steam.loadGameData();
    games = require('./games.json').Games;
    
    const CHUNK_SIZE = 5000;
    let buffer = games.map((item, idx) => idx%CHUNK_SIZE == 0 ? games.slice(idx, idx + CHUNK_SIZE) : null).filter(e => e);//Slice in proper size

    for(let i=0; i<buffer.length; i++){
      let game = buffer[i];
      await Game.bulkCreate(game);
      console.log(`Model.Game:\tLoading...\t(${i+1}/${buffer.length})`);
    }
    console.log('Model.Game:\tDone.');

    let users = await Steam.loadUserData();
    users = await User.bulkCreate(users);
    console.log('Model.User:\tDone.');

    for(let i=0; i<users.length; i++){
      const user = users[i];
      const {steamid} = user;
      let userGames = await Steam.loadGameLibrary(steamid);

      for(let j=0; j<userGames.length; j++){//Mapping Steam game to actual game data
        let game = userGames[j];
        const {appid} = game;

        let details = await Game.findOne({
          where : {
            appid : appid
          }
        });

        userGames[j] = details ? { playtime_forever: game.playtime_forever, GameId : details.id, UserId : user.id } :  null;
      }
      console.log(`Model.UserGame:\tLoading ${user.nickname} ... (${i+1}/${users.length})`);
      userGames = userGames.filter(e => e);
      await UserGame.bulkCreate(userGames);
    }
    console.log(`Model.UserGame:\tDone.`);
    
  });
}

module.exports = app;
