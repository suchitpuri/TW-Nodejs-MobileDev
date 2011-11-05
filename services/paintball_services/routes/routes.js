module.exports = function(app){

  app.namespace('/virtualpaintball', function(){
    app.get('/', function(req, res){
      res.render('index', {
        title: 'Express'
      });
    });

    app.get('/shoot', function(request, response) {

      response.contentType('application/json');
      player = require('../model/player');
      response.send(player.shoot());
    });


  });
}
