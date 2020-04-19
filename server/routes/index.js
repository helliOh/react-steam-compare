module.exports = (app) =>{
  //API routes
  app.use('/api/games', require('./api/games'));

  //Client routes
  app.use('/', require('./client/foo.js'));
}
