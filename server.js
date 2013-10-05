// very basic express server for demo purposes
(function() {
	'use strict';
  var app, express;
  express = require('express');
  app = express();

<<<<<<< HEAD
  // for development
  app.use(express['static'](__dirname + '/app'));
=======
  
  app.use(express['static'](__dirname + '/app'));
  
>>>>>>> 789339269518a7f7331251cd5116d90c2f61e448
  //app.use(express['static'](__dirname + '/dist'));

  app.listen('8080');
  console.log('Server started at http://localhost:8080');

}).call(this);
