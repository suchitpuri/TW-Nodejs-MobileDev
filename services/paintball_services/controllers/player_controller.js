exports.PlayerController = function(){

  var questions = ["Whats your name ?","What is 2+2","what is 3+3","what is 4+3"];
  this.shoot = function (request,response){
    playerModule = require('../models/player');
    var player = new playerModule.Player();
    return player.shoot(request.query.lat,request.query.lng,request.query.direction);
  }
  this.question = function ( request , response ) {
    var random_number = Math.floor(Math.random()*11) % questions.length ;
    number++;
    return JSON.stringify([{ Question_Desc: questions[number], question_id:number}]);
  };
};
