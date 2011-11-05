exports.shoot = function (request,response){
    
      player = require('../models/player');
      return player.shoot();
    
}

