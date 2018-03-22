import "whatwg-fetch";
//Importing fetch polyfill

//Exporting only one function, other functions are private
export function getUsers(){
	return get("/users");
};

function get(url){
	return fetch(url).then(onSuccess, onError);
};

function onSuccess(response){
	return response.json();
};

function onError(err){
	console.log(err); //eslint-disable-line no-console
};
