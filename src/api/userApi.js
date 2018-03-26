//This single file handles all API calls

import "whatwg-fetch";
//Importing fetch polyfill

import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

//Exporting only one function, other functions are private
export function getUsers(){
	return get("users");
};

export function deleteUser(id){
	return del(`users/${id}`);
};

function get(url){
	return fetch(baseUrl + url).then(onSuccess, onError);
};

function del(url){
	const request = new Request(baseUrl + url, {method: 'DELETE'});
	return fetch(request).then(onSuccess, onError);
};

function onSuccess(response){
	return response.json();
};

function onError(err){
	console.log(err); //eslint-disable-line no-console
};
