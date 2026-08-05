/* function add(a, b) {

    return a + b;

}

let answer = add(5, 3);

console.log(answer); */

/* function greet(name) {
    return "Hello " + name
}

let message = greet("Ryan")
console.log(message); */

/* function login(username, password) {
    return true;
}

let success = login ("Ryan", "1234")

if (success) {
    console.log("Login worked!");
} */

/* function greet(name) {

    return "Hello " + name;

}

let message = greet("Ryan");

console.log(message); */

/* function double(number) {

    return number * 2;

}

let result = double(10);

console.log(result + 5); */

/* let cars = [
    "Lexus",
    "Toyota",
    "Mazda",
    "Honda"
];

/* for (let car of cars) {
    if (car === "Toyota") {
        console.log(car);
    }
} */

/* let result = cars.find(function(car) {
    return car === "Toyota";
});

console.log(result);
 */

/* let testCases = [
    "Login",
    "Checkout",
    "Logout"
];

let test = testCases.find(function(testCase) {
    return testCase === "Checkout";

});

console.log(test); */

/* let cars = [
    "Lexus",
    "Toyota"
];

let result = cars.find(function(car) {

    return car === "Honda";

});

console.log(result); */

/* function(car) {
    return car === "Toyota";
} */

/* (car) => {
    return car === "Toyota";
}
 */

/* cars.find(car => car ==== "Toyota");
 */

/* let result = ["Dog", "Cat", "Bird"]
    .find(animal => animal === "Cat");

console.log(result); */



/* let numbers = [1, 2, 3, 4, 5]; 

let result = numbers.filter(number => number > 2)
console.log(result); */

/* let numbers = [1, 2, 3, 4];

let result =
    numbers.filter(number => number > 2);

console.log(result);

 */

/* let scores = [60, 70, 85, 90, 95];

let passing =
    scores.filter(score => score >= 80);

console.log(passing); */

/* let cars = [
    "Lexus",
    "Toyota",
    "Mazda"
];

cars.forEach(car => console.log(car)); */

/* let numbers = [1, 2, 3];

let doubled =
    numbers.map(number => number * 2);

console.log(doubled); */

/*
========================================
Lesson 12 Summary - Higher-Order Functions
========================================

What is a Higher-Order Function?

A higher-order function is simply a function
that accepts another function as an argument.

Example:

numbers.find(number => number === 10);

The function passed to find() tells JavaScript
what we are looking for.

----------------------------------------

return

return sends a value back from a function.

Example:

function add(a, b) {

    return a + b;

}

let answer = add(5, 3);

answer = 8

return DOES NOT print anything.

It simply hands a value back.

----------------------------------------

Arrow Functions (=>)

Traditional function:

function(car) {

    return car === "Toyota";

}

Arrow function:

car => car === "Toyota"

Both mean exactly the same thing.

Arrow functions are simply a shorter,
cleaner way to write functions.

When you see:

car =>

Think:

function(car)

----------------------------------------

find()

Purpose:

Find ONE item that matches a condition.

Example:

let cars = [
    "Lexus",
    "Toyota",
    "Mazda"
];

let result =
    cars.find(car => car === "Toyota");

Result:

"Toyota"

If nothing is found:

undefined

----------------------------------------

filter()

Purpose:

Return ALL items that match a condition.

Example:

let scores = [60, 80, 90, 100];

let passing =
    scores.filter(score => score >= 80);

Result:

[80, 90, 100]

filter() ALWAYS returns an array.

----------------------------------------

map()

Purpose:

Transform every item into something new.

Example:

let numbers = [1, 2, 3];

let doubled =
    numbers.map(number => number * 2);

Result:

[2, 4, 6]

The number of items stays the same.

Only the values change.

----------------------------------------

forEach()

Purpose:

Do something with every item.

Example:

cars.forEach(car => console.log(car));

Output:

Lexus
Toyota
Mazda

forEach() is commonly used to:

✓ Print data
✓ Click buttons
✓ Run tests
✓ Save data
✓ Perform actions

----------------------------------------

Comparing the Methods

find()

↓

Returns ONE item.

----------------------------------------

filter()

↓

Returns ALL matching items.

----------------------------------------

map()

↓

Transforms EVERY item.

Returns a NEW array.

----------------------------------------

forEach()

↓

Performs an action on EVERY item.

Usually used when you don't need
to return a new array.

----------------------------------------

Read the Code Like English

Instead of reading syntax...

Read intent.

Example:

cars.find(car => car === "Toyota");

Read as:

"Find the first Toyota in the list."

----------------------------------------

QA Examples

Find one failed test:

tests.find(test => test.status === "Fail");

----------------------------------------

Find all failed tests:

tests.filter(test => test.status === "Fail");

----------------------------------------

Convert response times to milliseconds:

times.map(time => time * 1000);

----------------------------------------

Run every test:

tests.forEach(test => runTest(test));

----------------------------------------

Key Takeaways

✓ Functions can return values.
✓ Arrow functions are shorter functions.
✓ find() returns ONE item.
✓ filter() returns ALL matching items.
✓ map() transforms every item.
✓ forEach() performs an action for each item.
✓ Read JavaScript like English,
  not punctuation.

========================================
End of Lesson 12
========================================
*/