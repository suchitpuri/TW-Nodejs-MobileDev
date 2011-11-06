
var playerModule = require('../../models/player');

var peopleKilled = [
    { name: 'Suchit', location: 'gurgaon' },
    { name: 'Atul', location: 'sao polo' },
    { name: 'Vineet', location: 'london' }
  ];


exports['shoot should return killed players'] = function (test) {
      var player = new playerModule.Player();
      test.equal(player.shoot(123,123,"abc"), JSON.stringify(peopleKilled));
      test.done();
};
