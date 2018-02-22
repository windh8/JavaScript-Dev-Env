//A package that can augment the color of the text displayed to the console

//the require keyword corresponds to the CommonJS Pattern

//but to test that the Transpiler (Babel) works lets use something from
//a version of JavaScript that node does not yet recognize
/*var chalk = require("chalk");*/

//This is the module syntax from a version of JavaScript that node
//does not yet recognize
import chalk from "chalk";

console.log(chalk.cyan("Starting App in Dev Mode ..."));
