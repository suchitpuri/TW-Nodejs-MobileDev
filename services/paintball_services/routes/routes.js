module.exports = function(app){

  app.namespace('/virtualpaintball/player/:id', function(){
    app.get('/', function(req, res){
      res.render('index', {
        title: 'Express'
      });
    });

    app.get('/shoot', function(request, response) {

      response.contentType('application/json');
      playerController = require('../controllers/player_controller');
      response.send(playerController.shoot());
    });


  });
}
