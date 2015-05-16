// server.js

// modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration


// config files
var db = require('./config/db');

//set port
var port = process.env.PORT || 8080;

// connecto to mongoDB database
// mongoose.connect(db.url);

// get all data of the POST parameters
app.use(bodyParser.json());


// get all data of the POST parameters
app.use(bodyParser.json({type: 'application/vnd.api+json' }));

// get all data of the POST parameters
app.use(bodyParser.urlencoded({extended: true}));

// override with the X-HTTP-Mthod-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));

//// set the static files location /public/img will be /img for users.
app.use(express.static(__dirname + '/public'));

//routes
require('./app/routes')(app); 

// start app
app.listen(port);

console.log('Magix happens on port ' + port);

// expose app
exports = module.exports = app;
