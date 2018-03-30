import path from "path";
import webpack from 'webpack';

export default {
	//entry point of our application
	entry: "./src/index",

	//Specifies how sourcemaps should be generated
	//'inline-source-map': recommended for development
	//'source-map': recommended for production (Slower to build, but provides the highest quality source-map experience)
	devtool: "source-map",
	/*debug: true,*/  //This property was removed in Webpack 2

	devServer: {
		//Setting to false will display a list of all files that are being bundled
		noInfo:false
	},

	//Used to targert an environment, set to web in this app so that it can run in browser
	target: "web",

	//Specifies where to create the webpack bundle
    //When creating a bundle for production, we should write
	//physical files to a folder called 'dist' (short for distribution; for best practices)
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "bundle.js"
	},

	//
	plugins: [
		//Eliminate duplicate packages when generating bundle
		//will look through all files that are being bundled and will ensure no duplicates
		new webpack.optimize.DedupePlugin(),

		//Minify JS (uglify the code)
		new webpack.optimize.UglifyJsPlugin
	],

	//Enables webpack to process more than just JavaScript files
	module:{
		//In regards to migrating from webpack 1 to webpack 2
		//'module.loaders' is now 'module.rules'
		//'rules' tell webpack how to handle each file specified below
		rules: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.css$/, use: [
				{loader: "style-loader"},
				{loader: "css-loader", options: {modules: true}}
			]}
		]
	}
}
