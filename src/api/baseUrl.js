/*This function will look at the hostname to determine if the application
 *is running in development.

 *If it is, it will point to our mock api (which is hosted on port 3001)

 *If it is running in production, then it will point to our production api
 *that was set up in express.*/
/*export default function getBaseUrl() {
	const inDevelopment = window.location.hostname === 'localhost';
	return inDevelopment ? 'http://localhost:3001/' : '/';
}*/

//The method 'getQueryStringParameterByName' will look for the parameter
//'useMockApi' and if it exists in the query string, then its going to point
//to the mock api 'http://localhost:3001/' otherwise with will point to the real
//api hosted by express
export default function getBaseUrl() {
	return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

//This function will get a parameter from the url!
//Using this method and by setting a query sting name:value pair to 'useMockApi=true'
//we will be able to switch between Production API and Mock API
function getQueryStringParameterByName(name, url){
	if(!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if(!results) return null;
	if(!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
