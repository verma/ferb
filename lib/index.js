// index.js
// Get an express server up and running and use that to simplify the
// setting up and initialization
//

var express = require("express"),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	debug = require('debug')('simple-server:main');

var server = function() {
	var app = express();

	// all environments
	app.enable('trust proxy');

	// configure middlewares
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	app.use(require('method-override')());

	app.use(cookieParser());

	// development only
	var env = process.env.NODE_ENV || 'development';
	if ('development' == env) {
		app.use(require('errorhandler')());
	}

	return app;
};

module.exports = exports = server;
