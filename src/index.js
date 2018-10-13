import "./style.css";

//The numeral library is used to format numbers
import numeral from "numeral";

//Created a constant with the value 1000 and formated it with the
//numeral library
const courseValue = numeral(1000).format("$0,0.00");


