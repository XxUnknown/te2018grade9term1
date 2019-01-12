const READLINE = require("readline-sync");

function sayHello(name) {
	console.log(`Oh hi ${name}`);
}

function botherMark() {
	console.log(`I did not hit her, I did not`);
	console.log(`I did not hit her, I did not`);
	console.log(`I did not hit her, I did not`);
}

botherMark();
sayHello("Mark");

//repeats "I did not hit her, I did not"
//prints "Oh hi Mark"

function add(x,y) {
	console.log(`${x + y}`);
}

add(1,3);

//adds variables x and y

function getAge() {
	let birthYear = READLINE.question("What is your birth year?: ");
	let currentYear = (new Date()).getFullYear();
	let age = currentYear - birthYear;
	return age;
}

let userAge = getAge();
console.log(userAge);
if(userAge < 17) {
	console.log("No R-Rated movies!")

}

//asks for birth year, calculates age, judges if you can watch an R-Rated movie

let dog = {
	numLegs: 4,
	amputate: function deleteLimbs (legs){
		this.numLegs = this.numLegs - legs;
	}
};

//node functions_introduction.js