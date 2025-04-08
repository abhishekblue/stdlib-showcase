// Run this file to check the functionality.

const fname = "Abhishek";

function greet(user) {
	return "Hello, " + user + "!";
}

console.log(greet(fname));

const lucky = Math.random();
const parsed = parseInt("42");
const number = isNaN("abc");

function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
};
rollDice();
