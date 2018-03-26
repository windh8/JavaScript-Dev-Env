/*This function will look at the hostname to determine if the application
 *is running in development.

 *If it is, it will point to our mock api (which is hosted on port 3001)

 *If it is running in production, then it will point to our production api
 *that was set up in express.*/
export default function getBaseUrl() {
	const inDevelopment = window.location.hostname === 'localhost';
	return inDevelopment ? 'http://localhost:3001/' : '/';
}
