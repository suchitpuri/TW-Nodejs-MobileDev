module.exports = function(app){

  app.namespace('/virtualpaintball', function(){
    app.get('/', function(req, res){
      res.render('index', {
        title: 'Express'
      });
    });

    app.get('/shoot', function(request, response) {

      response.contentType('application/json');

      var people = [
        { name: 'Dave', location: 'Atlanta' },
        { name: 'Santa Claus', location: 'North Pole' },
        { name: 'Man in the Moon', location: 'The Moon' }
      ];

      var peopleJSON = JSON.stringify(people);
      response.send(peopleJSON);
    });


  });
}
