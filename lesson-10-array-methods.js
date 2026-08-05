/*lesson-10-array-methods.js */

/* example of using the push() method to add an element to the end of an array.

let cars = ["Lexus", "Toyota"];
cars.push("Mazda"); // adds "Mazda" to the end of the array

console.log(cars); // ["Lexus", "Toyota", "Mazda"]

*/

/* example of using the pop() method to remove the last element from an array.

let cars = ["Lexus", "Toyota", "Mazda"];
cars.pop(); // removes the last element from the array

console.log(cars); // ["Lexus", "Toyota"]

*/

/* example of using the shift() method to remove the first element from an array.

let cars = ["Lexus", "Toyota", "Mazda"];

cars.forEach(function(car) {
    console.log(car);
});

*/

/* example of using the unshift() method to add an element to the beginning of an array.
let cars = ["Lexus", "Toyota"];

let result = cars.push("Mazda");

console.log(result);

*/

/* example of using the includes() method to check if an array contains a specific element.

let cars = ["Lexus", "Toyota", "Mazda"];

let result = cars.includes("Toyota");

console.log(result); // true

*/

/*

let cars = [
    "Lexus",
    "Toyota",
    "Mazda",
    "Honda"
];

console.log(cars.includes("Toyota"));
*/

/*
========================================
Lesson 10 Summary - Array Methods
========================================

What is an Array Method?

An array method is a built-in function that belongs
to arrays.

Example:

let cars = ["Lexus", "Toyota"];

cars.push("Mazda");

JavaScript gives arrays many useful methods.

----------------------------------------

push()

Adds an item to the END of an array.

Example:

let cars = ["Lexus", "Toyota"];

cars.push("Mazda");

Result:

["Lexus", "Toyota", "Mazda"]

Returns:
The NEW length of the array.

----------------------------------------

pop()

Removes the LAST item from an array.

Example:

let cars = ["Lexus", "Toyota", "Mazda"];

let removedCar = cars.pop();

Result:

["Lexus", "Toyota"]

Returns:
The item that was removed.

removedCar = "Mazda"

----------------------------------------

unshift()

Adds an item to the BEGINNING of an array.

Example:

let names = ["Alex", "Sarah"];

names.unshift("Ryan");

Result:

["Ryan", "Alex", "Sarah"]

Returns:
The NEW length of the array.

----------------------------------------

shift()

Removes the FIRST item from an array.

Example:

let names = ["Ryan", "Alex", "Sarah"];

let removedName = names.shift();

Result:

["Alex", "Sarah"]

Returns:
The item that was removed.

removedName = "Ryan"

----------------------------------------

includes()

Checks whether an item exists in an array.

Example:

let cars = ["Lexus", "Toyota", "Mazda"];

cars.includes("Toyota");

Returns:

true

Example:

cars.includes("Honda");

Returns:

false

includes() DOES NOT change the array.

----------------------------------------

Methods That Change the Array

push()
pop()
shift()
unshift()

----------------------------------------

Methods That Do NOT Change the Array

includes()

----------------------------------------

Return Values

Some methods return useful information.

push()      -> New length
unshift()   -> New length

pop()       -> Removed item
shift()     -> Removed item

includes()  -> true or false

----------------------------------------

Real QA Example

let pages = [
    "Home",
    "Products",
    "Cart",
    "Checkout"
];

if (pages.includes("Checkout")) {
    console.log("Run checkout tests");
}

Programming concepts used:

✓ Arrays
✓ Methods
✓ Booleans
✓ Conditionals

----------------------------------------

Key Takeaways

✓ Arrays have built-in methods.
✓ Methods can change an array.
✓ Methods can return values.
✓ Some methods only answer questions.
✓ Read methods like English.

Examples:

cars.push("Mazda")

"Add Mazda to the end of cars."

cars.includes("Toyota")

"Does cars include Toyota?"

----------------------------------------

Methods Learned So Far

✓ push()
✓ pop()
✓ shift()
✓ unshift()
✓ includes()

========================================
End of Lesson 10
========================================
*/
