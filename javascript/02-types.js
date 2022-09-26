// TYPES


// There are two categories of types in JS, this file with focus on Primative/Value types

// STRING - This is what is called a string literal
let name = "Eddie";

// NUMBER - This is what is called a number literal
let age = "24";

// BOOLEAN - This is a boolean literal
let male = true;

// UNDEFINED
// As you can see there are two ways to set an undefined vaible, explicitly or just not just assigning a value
let undefined_variable;
let undefined_variable2 = undefined;

// NULL
// We use null when we want to explicitly clear the value of variable
let null_variable = null;



// DYNAMIC TYPING
// One thing that seperates JS from other lang's is that JS is dynamic, as opposed to static. They diffrence between the
// is that in a static language, when a variable is set to a certain type, that type cannot be changed. In a dynamic lang
// a type can change

//In JS we have an operator called `typeof` which lets you see the type of a vairable
let firstName = "eddie";
console.log(typeof (firstName));

// If we reassign name to a number and check its type, we will see that the type has been reassigned
firstName = 00;
console.log(typeof (firstName))