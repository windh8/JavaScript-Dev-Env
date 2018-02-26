import "./style.css";

//The numeral library is used to format numbers
import numeral from "numeral";

//Created a constant with the value 1000 and formated it with the
//numeral library
const courseValue = numeral(1000).format("$0,0.00");

//The string below uses a ES6 template string feature (from ES6) hence must use
// ` instead of ' or "
console.log(`I would pay ${courseValue} for this awesome course!`);
