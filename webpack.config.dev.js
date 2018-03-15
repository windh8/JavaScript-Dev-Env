import path from "path";

export default {
	//entry point of our application
	entry: "./src/index",

	//Generates a sourcemap
	devtool: "inline-source-map",
	/*debug: true,*/  //This property was removed in Webpack 2

	devServer: {
		//Setting to false will display a list of all files that are being bundled
		noInfo:false
	},

	//Used to targert an environment, set to web in this app so that it can run in browser
	target: "web",

	//Specifies where to create the webpack bundle
    //With this configuration, webpack will not generate any physical file
    //It will create the bundle in memory and serve it to the browser
    //Need to define the path and name to simulate the files existence
	output: {
		path: path.resolve(__dirname, "/src"),
		publicPath: "/",
		filename: "bundle.js"
	},

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
