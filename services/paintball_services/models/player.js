  var peopleKilled = [
    { name: 'Suchit', location: 'gurgaon' },
    { name: 'Atul', location: 'sao polo' },
    { name: 'Vineet', location: 'london' }
  ];

  exports.shoot = function(){
    var peopleKilledJSON = JSON.stringify(peopleKilled);
    return peopleKilledJSON;
  }


