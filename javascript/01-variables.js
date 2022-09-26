// VARIABLES
// In previous version of JS we used `var` to decalre variables but now we use let
let undefined_variable;
console.log(undefined_variable);

// printing this variable out to the console results in it printing `undefined` and the reason for this
// is javascript defaults to setting a variable to undefined. You can however init a variable with data
let string_variable = "Hello world 2 - Electric boogaloo";
console.log(string_variable);

//There are a few words for naming variables:
//  - They cannot start with a number e.g. 0var
//  - They cannot contain a space or -

// You can decalre multipel variables at once like this, however it is best practise to one at a time
let firstName = "foo", lastName = "bar";
console.log(firstName);
console.log(lastName);



// CONSTANTS
// Say you set a variable like this
let age = 24;
console.log(age);

// you are still able to update in the future like this
age = 25;
console.log(age);

// However in a real world application there are times when you do not want a value for a variable to change. In those situations you set
// a constant rather than a variable, for example

const dob = 200489;
console.log(dob);
// dob = 181278
console.log(dob)

// As can be seen above, line 14 is commented out. The reason for this is it would cause the code to error
