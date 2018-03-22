import "./style.css";

//Import reference to the API call needed (created in file userApi.js)
//Use a named import to get the only function that is exported/imported
import {getUsers} from "./api/userApi";

//The numeral library is used to format numbers
import numeral from "numeral";

//Created a constant with the value 1000 and formated it with the
//numeral library
const courseValue = numeral(1000).format("$0,0.00");

//The string below uses a ES6 template string feature (from ES6) hence must use
// ` instead of ' or "
console.log(`I would pay ${courseValue} for this awesome course!`); //eslint-disable-line no-console

//Populate a table of users via API call
getUsers().then(result => {
	let usersBody = "";

	result.forEach(user => {
		usersBody += `<tr>
					<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
					<td>${user.id}</td>
					<td>${user.firstName}</td>
					<td>${user.lastName}</td>
					<td>${user.email}</td>
					</tr>`;
	});

	global.document.getElementById("users").innerHTML = usersBody;
});





/*****************************************************************************/
/*								Read Me First								*/
//Continue at this video:	Building a JavaScript Development Environment
