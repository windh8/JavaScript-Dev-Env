/*This file will use the JSON-Schema-Faker to generated
 a mock data set and write it to a file*/

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

//Pass the schema to JSON-Schema-Faker to generate mock data
//The mock data will be turned into a string of JSON, using JSON.stringify
const json = JSON.stringify(jsf(schema));

//Use the fs package (built into node) to write a database file
//(called 'db.json') and place it in the api folder
fs.writeFile("./src/api/db.json", json, function(err) {
	if(err) {
		return console.log(chalk.red(err));
	}
	else {
		console.log(chalk.green("Mock data generated."));
	}
});
