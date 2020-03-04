// strings

"First string";
"Second string";

// numbers

10;
500;
3.14;

// booleans (Truthy/falsy)

true;
false;

// specials

undefined;
null;
NaN;

// objects

const user = {
  name: "Vishal",
  userName: "vishu"
};

// array
const users = ["Vishal", "Rahul", "Kartik"];

// console.log(user);
// console.log(users);

const luckyNumber = [1, 43, 58, 97]; // array of numbers
// console.log(luckyNumber);

const whatever = ["Hey", 1, "Vishal"];
// console.log(whatever);

const superUsers = [{ name: "Rihan" }, { name: "Vishal" }, { name: "Kartik" }]; // array of object
// console.log(superUsers[2]["name"]);

// declaring variables

var things = "First"; // ES5

// const newThings = "Second";
let otherThings = "Third";

// newThings = "Hey! user"; this will not work

const newThings = {
  name: "Vishu"
};

newThings.name = "Hey! user";

console.log(newThings.name);
console.log(newThings);
