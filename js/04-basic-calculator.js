/*eslint-env browser*/
var firstNumber = parseInt(window.prompt("Enter a number"), 10);
var secondNumber = parseInt(window.prompt("Enter another number"), 10);
var perform = window.prompt("Do you want to add, subtract, multiply or divide?");
var result;
function calculate(firstNumber, secondNumber, perform) {
    "use strict"
    switch (perform) {
        case "add":
            result = (firstNumber + secondNumber);
            window.document.write(firstNumber + " plus " + secondNumber + " equals " + result + ".");
            break;
        case "subtract":
            result = (firstNumber - secondNumber);
            window.document.write(firstNumber + " minus " + secondNumber + " equals " + result + ".");
            break;
        case "multiply":
            result = (firstNumber * secondNumber);
            window.document.write(firstNumber + " multiplied by " + secondNumber + " equals " + result + ".");
            break;
        case "divide":
            result = (firstNumber / secondNumber);
            window.document.write(firstNumber + " divided by " + secondNumber + " equals " + result + ".");
            break;
        default:
            window.document.write("Rerun application and choose two numbers and operation");
    }
}  
result = calculate(firstNumber, secondNumber, perform);