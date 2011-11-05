exports.Player = function () {
var peopleKilled = [
    { name: 'Suchit', location: 'gurgaon' },
    { name: 'Atul', location: 'sao polo' },
    { name: 'Vineet', location: 'london' }
  ];

  this.shoot = function(lat,lng,direction){
    var peopleKilledJSON = JSON.stringify(peopleKilled);
    return peopleKilledJSON;
  }

}
