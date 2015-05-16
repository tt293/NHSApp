// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');

module.exports = function(app) {
	// server routes
	// handle things like api calls

	// auth routes

	// sample api route
	app.get('/api/nerds', function(req, res) {
		Nerd.find(function(err, nerds) {
			if (err)
				res.send(err);

			res.json(nerds); // return data in JSON format
		});
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});
}