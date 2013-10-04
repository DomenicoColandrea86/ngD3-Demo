// very basic express server for demo purposes
(function() {
	'use strict';
  var app, express;
  express = require('express');
  app = express();

  // for development
  app.use(express['static'](__dirname + '/app'));
  //app.use(express['static'](__dirname + '/dist'));

  app.listen('8080');
  console.log('Server started at http://localhost:8080');

}).call(this);
