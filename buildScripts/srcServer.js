/*This file will configure our webserver that
will server up the files in our source directory*/

var express = require("express");
var path = require("path");
var open = require("open");

var port = 3000;

//Creates an instance of express
var app = express();

/*Specifies that express should handle a specific (get Method) route from clients.
  Hence upon receiving a request/reference, to the root directory, the function below
  should be executed (hence sending a specific file to the client)*/
app.get("/", function(req, res){
	//__dirname represnts the directory that express is currently running in
	res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/dev-test", function(req, res){
	res.send("<html><body>Test Page: Pass</body></html>");
});

/*Specifies to express, on which port to listen to (the one specified above)*/
app.listen(port, function(err){
	//If an error occurs, log it to the console, otherwise open the website using that address
	if(err)
		console.log(err);
	else {
		open("http://localhost:" + port);
	}
});
