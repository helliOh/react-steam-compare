module.exports = (app) =>{
  //API routes
  app.use('/api/games', require('./api/games'));
  app.use('/api/users', require('./api/users'));

  //Client routes
  app.use('/', require('./client/foo.js'));
}
