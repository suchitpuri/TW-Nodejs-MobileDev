  var peopleKilled = [
    { name: 'Dave', location: 'Atlanta' },
    { name: 'Santa Claus', location: 'North Pole' },
    { name: 'Man in the Moon', location: 'The Moon' }
  ];

  exports.shoot = function(){
    var peopleKilledJSON = JSON.stringify(peopleKilled);
    return peopleKilledJSON;
  }


