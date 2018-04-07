/*This file will configure our webserver to serve up the production app locally.
 *
 *This is file does not follow proper guidelines for actual production use,
 *hence only useful for local debugging purposes (when app served from local machine).
 *
 *WebApp being served from local machine to ensure that production build works locally*/

import express from "express";
import path from "path";
import open from "open";

import compression from 'compression';

/*Remove any webpack calls in this file, because we are no longer
 *going to interact with webpack for our disServer.
 *
 *Were going to be serving up just the static built files.*/

const port = 3000;

//Creates an instance of express
const app = express();

/*eslint-disable no-console*/

//Enables gzip compression in express
app.use(compression());

//the line below adds support to express for serving static files
//tells express to serve up the static files in the /dist directory
app.use(express.static('dist'));

/*Specifies that express should handle a specific (get Method) route from clients.
  Hence upon receiving a request/reference, to the root directory, the function below
  should be executed (hence sending a specific file to the client)*/
app.get("/", function(req, res){
	//__dirname represnts the directory that express is currently running in
	res.sendFile(path.join(__dirname, "../dist/index.html"));
});

//This block will be commented out due to setting up api on heroku. (Speration of api from ui)
//We also modified baseUrl to point to the link given from heroku (for api), during production build
/*
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
*/

/*Specifies to express, on which port to listen to (the one specified above)*/
app.listen(port, function(err){
	//If an error occurs, log it to the console, otherwise open the website using that address
	if(err)
		console.log(err);
	else {
		open("http://localhost:" + port);
	}
});
