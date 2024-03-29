
/**
 * Module dependencies.
*/

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(express.compiler({ src: __dirname + '/public', enable: ['sass'] }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});


app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});


//separate modules 
require('express-namespace')

require('./routes/routes.js')(app);

var Sequelize = require("sequelize")
var sequelize =new Sequelize('fastestfingerfirst', 'root', 'password', {

  port: 3306,

  logging: false,

  maxConcurrentQueries: 100,

  define: { timestamps: false },

  sync: { force: true }
})


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
