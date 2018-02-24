import path from "path";

export default {
  //Enables some debugging information when running our build
  debug: true,
  devtool: "inline-source-map",

  //Setting to false will display a list of all files that are being bundled
  noInfo: false,

  //Entry point of our application
  entry: [
    //Path is apart of nodeJS, this line will give the full path to this directory
    path.resolve(__dirname, "src/index")
  ],

  //Used to targert an environment, set to web in this app so that it can run in browser
  target: "web",

  //Specifies where to create the webpack bundle
  //With this configuration, webpack will not generate any physical file
  //It will create the bundle in memory and serve it to the browser
  //Need to define the path and name to simulate the files existence
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js"
  },

  //Can optionally define some plugins to enhance webpacks power
  //Example: hot reloading
  plugins: [],

  //Defines how to handle the file types below
  module: {
    //Loaders teach webpack how to handle different file types
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ["babel"]},
      {test: /\.css$/, loaders: ["style", "css"]}
    ]
  }
};
