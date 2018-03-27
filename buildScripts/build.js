/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

//this line signifies that we are running Node in production mode.
//(not necessary for setup) Adding it here => important if you create
//							a dev specific config for bable in your .babelrc file.
//Babel, and some other libraries (that you may use) look for this environment
//variable to determine how they are built.
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment ...'));

//calling the webpack object and passing it
//the config (imported above) as an argument
webpack(webpackConfig).run((err, stats) => {
	//Handles any error that might occur
	if(err){
		//so a fatal error occured. Stop here.
		console.log(chalk.red(err));
		return 1;
	}

	//the following lines of code below will ensure that
	//warnings, errors, and stats are displayed to the console
	const jsonStats = stats.toJson();
	if(jsonStats.hasErrors){
		return jsonStats.errors.map(error => console.log(chalk.red(error)))
	}

	if(jsonStats.hasWarnings){
		console.log(chalk.yellow('Webpack generated the following warnings'));
		jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)))
	}

	console.log(`Webpack stats: ${stats}`);

	//if we got this far, then build succeeded
	console.log(chalk.green('Your app has been built for production and written to /dist!'));

	//Otherwise, if no errors occured, return 0 for success
	return 0;
});
