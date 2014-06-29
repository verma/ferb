// server.js
// Simple usage example
//

var server = require("../lib");

var s = server();

s.get("/", function(req, res) {
	res.json({
		message: "You got me!"
	});
});

s.post("/", function(req, res) {
	console.log(req.body);
	res.json({});
});

s.listen(3000);
