import "./style.css";

//Import reference to the API call needed (created in file userApi.js)
//Use a named import to get the only function that is exported/imported
import {getUsers, deleteUser} from "./api/userApi";

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
    usersBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

	global.document.getElementById("users").innerHTML = usersBody;

	//Returns an array-like structure
	const deleteLinks = global.document.getElementsByClassName('deleteUser');

	//You must convert the array-like structure into an actual array before you
	//can iterate through its elements and modify it. To do this use Array.from(...)
	Array.from(deleteLinks, link => {
			link.onclick = function(event){
			//For each link (html) element in the array, add an event handler function
			//to delete the corresponding record when one of these links fires off an event

			//'event.target' references the element that fired the event
			const element = event.target;
			event.preventDefault();
			deleteUser(element.attributes["data-id"].value);
			const row = element.parentNode.parentNode;
			row.parentNode.removeChild(row);
		}
	});
});
