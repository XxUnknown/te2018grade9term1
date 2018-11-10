const READLINE = require("readline-sync");

console.log(`
**************************** Parent Bot ****************************`);

console.log(`
******* Bus ********
	`);

let bus = READLINE.question("Are you on the bus yet? ");

if(bus == "yes") {
	console.log("Have a nice day");
}

else {
	console.log("I will contact the Bus");
}

console.log(`
***** Homework *****
	`);

let homework = READLINE.question("Have you finished your homework? ");

if(homework == "no") {
	console.log("Finish your homework, NOW")
}

if(homework == "") {
	console.log("Finish your homework, NOW")
}

if(homework == "yes") {
	console.log("Good job, you can eat dinner")
}

console.log(`
****** Food ********
	`);

let food = READLINE.question("Have you eaten food? ");

if(food == "yes") {
	console.log("Good, go take a shower");
}

else {
	console.log("Go get food to eat");
}

console.log(`
****** Shower ******
	`);

let shower = READLINE.question("Have you taken a shower? ");

if(shower == "yes") {
	console.log("Okay, go to sleep");
}

else {
	console.log("Go to the bath and take a shower, NOW")
}

if(bus == "no" && homework == "no" && food == "no" && shower == "no") {
	console.log(`
		       Do you are have stupid?`)
}

else {
	console.log(`
		  Thank you for using Parent Bot`);
}

console.log(`
**************************** Parent Bot ****************************
	`);