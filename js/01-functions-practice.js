/*eslint-env browser*/
//STEP 1
/*
function halfNumber() {
    "use strict";
    window.console.log("Half of " + arguments[0] + " is " + arguments[1] + "."); 
}
halfNumber(5, (5 / 2));
*/
//or
/*
function halfNumber() {
    "use strict";
}
var number = parseInt(window.prompt("Enter a number"), 10);
var result = number / 2;
halfNumber(number);
window.console.log("Half of " + number + " is " + result + ".");
*/
//STEP 2
/*
function squareNumber() {
    "use strict";
    window.console.log("The result of squaring the number " + arguments[0] + " is " + arguments[1] + ".");
}
squareNumber(3 * 3);
*/
//or
/*
function squareNumber() {
    "use strict";
}
var number = parseInt(window.prompt("Enter a number"), 10);
var result = number * number;
squareNumber(number);
window.console.log("The result of squaring the number " + number + " is " + result + ".");
*/
//STEP 3
/*
function percentOf() {
    window.console.log(arguments[0] + " is 50% of " + arguments[1] + ".");
}
percentOf((100 * .5), 100);
*/
//or

function percentOf() {
    "use strict";
}
var num1 = parseInt(window.prompt("Enter a number"), 10);
var num2 = parseInt(window.prompt("Enter a number"), 10);
var result = num1 / num2 * 100;
percentOf(num1, num2);
window.console.log(num1 + " is " + result + "% of " + num2 + ".");

//STEP 4
/*
function findModulus() {
    window.console.log(arguments[0] + " is the modulus of " + arguments[1] + " and " + arguments[2] + ".");
}
findModulus((10 % 4), 4, 10);
*/
//STEP 5
/*
function sumAll() {
    "use strict"
    var i;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
var num1 = parseInt(window.prompt("Enter number"), 10);
var num2 = parseInt(window.prompt("Enter another number"), 10);
var num3 = parseInt(window.prompt("Enter last number"), 10);
var total = sumAll(num1, num2, num3);
window.console.log("The sum of " + num1 + ", " + num2 + " and " + num3 + " is " + total + ".");
*/



