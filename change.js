// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// fill in object below with all relevant properties (see instructions)
let changeMachine = {
	inputCents: undefined,
	quarters: undefined,
	dimes: undefined,
	nickels: undefined,
	pennies: undefined,
	greeting: "Moshi moshi, ATM desu!",
	farewell: "Arigato gozaimashita!"
};

// write code below that simulates the change machine in action!
console.log(`
***************************************************
${changeMachine.greeting}`);

changeMachine.inputCents = READLINE.question(
'Enter the amount of cents: ');

changeMachine.quarters = Math.floor(changeMachine.inputCents / 25);
let y = changeMachine.inputCents % 25;

changeMachine.dimes = Math.floor(y / 10);
let y1 = y % 10;

changeMachine.nickels = Math.floor(y1 / 5);

changeMachine.pennies = y1 % 5;

console.log(`
quarters = ${changeMachine.quarters}
dimes = ${changeMachine.dimes}
nickels = ${changeMachine.nickels}
pennies = ${changeMachine.pennies}

${changeMachine.farewell}
***************************************************
`);

