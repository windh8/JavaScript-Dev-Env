/*This file will configure our webserver that
will server up the files in our source directory*/

//Commented code below corresponds to CommonJS pattern code
//from ES5 that we replaced with ES6 code that will be transpiled
/*var express = require("express");
var path = require("path");
var open = require("open");*/
import express from "express";
import path from "path";
import open from "open";

import webpack from "webpack";
import config from "../webpack.config.dev";

//Commented code below corresponds to CommonJS pattern code
//from ES5 that we replaced with ES6 code that will be transpiled
/*var port = 3000;*/
const port = 3000;

//Creates an instance of express
/*var app = express();*/
const app = express();

//A reference to the webpack compiler
const compiler = webpack(config);

/*eslint-disable no-console*/

app.use(require("webpack-dev-middleware")(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

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

//This new route (simple endpoint) will handle API requests, by returning 'User' data
app.get("/users", function(req, res){
	//In a read app (Production), this information would be queried from a Database (perhaps)
	//served by a different machine on a different web server

	//Infomation below is hard-coded
	//Too much work to set up Database/Seperate API for a dev build of a web application
	res.json([
		{"id":1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmail.com"},
		{"id":2, "firstName":"Tammy", "lastName":"Norton", "email":"tnorton@yahoo.com"},
		{"id":3, "firstName":"Tina", "lastName":"Lee", "email":"lee.tina@hotmail.com"}
	]);
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
