/*eslint-env browser*/
function tellFortune(children, partnersName, geoLocation, jobTitle) {
    "use strict";
    var future;
    future = "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnersName + " with " + children + " kids.<br>";
    window.document.write(future);
}
tellFortune(3, "Yadira", "Mexico", "Web Designer");
tellFortune(2, "Mary", "England", "Engineer");
tellFortune(5, "Stephanie", "United States", "Janitor");


