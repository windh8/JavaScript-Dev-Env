/*The following line will tell Mocha that Babel must first
transpile the test files before Mocha can run them*/

require("babel-register")();

//Disable webpack features that Mocha does not understand: the import of a .css file
require.extensions[".css"] = function(){};
