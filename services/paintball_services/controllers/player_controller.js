exports.PlayerController = function(){

  this.shoot = function (request,response){

    playerModule = require('../models/player');
    var player = new playerModule.Player();
    return player.shoot(request.query.lat,request.query.lng,request.query.direction);

  }
}

