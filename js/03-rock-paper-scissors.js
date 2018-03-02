/*eslint-env browser*/
var user = window.prompt("Choose rock, paper or scissors");
    if (user != "rock" || "paper" || "scissors") {
        window.document.write("Learn how to spell, choose again!<br>");
    } else {
        window.console.log(user);
    }
var cpu = Math.random();
    if (cpu < 0.33) {
        cpu = "rock";
    } else if (cpu < 0.66) {
        cpu = "scissors";
    } else {
        cpu = "paper";
    }
window.console.log("The computer chose " + cpu + "!<br>");
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "You win, rock crushes scissors!";
        } else {
            return "You lose, try again!";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "You win, paper covers rock!";
        } else {
            return "You lose, try again!";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "You win, scissors cut paper!";
        } else {
            return "You lose, try again!";
        }
    }
}

var results = compare(user, cpu);
window.document.write(" You Chose " + user + " and the Computer chose " + cpu + ":<br>" + " " + results);  