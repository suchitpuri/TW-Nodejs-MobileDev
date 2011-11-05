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

  function getNextLatLong(lat1,lon1,brng){
    var d = .002 ; //range of the gun
    var R = 6371 ; //radius of earth
    var lat2 = Math.asin( Math.sin(lat1)*Math.cos(d/R) + 
                                               Math.cos(lat1)*Math.sin(d/R)*Math.cos(brng) );
    var lon2 = lon1 + Math.atan2(Math.sin(brng)*Math.sin(d/R)*Math.cos(lat1), 
                                                              Math.cos(d/R)-Math.sin(lat1)*Math.sin(lat2));
  }

}
