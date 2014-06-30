# What is this?
A simple package that makes it a breeze to get a Node.js server up and running.  It uses express v4.0 internally to create a server object and returns it.

# How do I use it?

Once you have the package installed, you can run a simple server using the code below:

    var s = server();

	 // Handle a GET request
	 s.get("/", function(req, res) {
	     res.json({
		      message: "You got me!"
		  });
	 });

     // Handle a POST request
	 s.post("/", function(req, res) {
	     console.log(req.body);
		 res.json({});
	});

    s.listen(3000);
    
 
# License
(C) Uday K Verma 2014, MIT License.