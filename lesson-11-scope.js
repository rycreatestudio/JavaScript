// lesson-11-scope

/*

let name = "Ryan";

if (true) {

    let hobby = "Coding";

    console.log(name);

    console.log(hobby);

}

console.log(name);
*/

/*
========================================
Lesson 11 Summary - Scope
========================================

What is Scope?

Scope answers one question:

"Where can I use this variable?"

Variables only exist inside the scope where
they were created.

----------------------------------------

Global Scope

Variables created outside of functions,
loops, or if statements are global.

Example:

let name = "Ryan";

console.log(name);

Output:

Ryan

Global variables can be accessed from
inside blocks and functions.

----------------------------------------

Block Scope

Curly braces {} create a new scope.

Example:

if (true) {

    let car = "Supra";

    console.log(car);

}

Output:

Supra

Outside the block:

console.log(car);

Result:

Error

The variable only exists inside the block.

----------------------------------------

Loop Scope

Loops create their own scope.

Example:

for (let i = 0; i < 3; i++) {

    console.log(i);

}

Outside the loop:

console.log(i);

Result:

Error

The loop variable only exists inside
the loop.

----------------------------------------

Function Scope

Functions create their own scope.

Example:

function greet() {

    let message = "Hello!";

    console.log(message);

}

greet();

Output:

Hello!

Outside the function:

console.log(message);

Result:

Error

Variables created inside a function
cannot be used outside the function.

----------------------------------------

Nested Scope

Inner scopes can access variables
from outer scopes.

Example:

let company = "OpenAI";

function work() {

    console.log(company);

}

work();

Output:

OpenAI

The function can access global variables.

----------------------------------------

Variable Shadowing

Variables with the same name can exist
in different scopes.

Example:

let car = "Lexus";

if (true) {

    let car = "Supra";

    console.log(car);

}

console.log(car);

Output:

Supra
Lexus

The inner variable temporarily hides
(shadows) the outer variable.

Good to know,
but generally avoid doing this unless
there is a good reason.

----------------------------------------

Apartment Analogy

Think of scopes like rooms.

Apartment (Global)

├── Living Room
├── Office
└── Bedroom

Variables only exist in the room
where they were created.

Rooms can see the hallway.

The hallway cannot see inside rooms.

----------------------------------------

Golden Rule

Inner scopes can access outer scopes.

Outer scopes CANNOT access inner scopes.

Remember this sentence.

It explains almost every scope question.

----------------------------------------

Real QA Example

function loginTest() {

    let username = "Ryan";
    let password = "12345";

    console.log(username);

}

The password only exists while the
login test is running.

Keeping variables local makes code
safer and easier to understand.

----------------------------------------

Key Takeaways

✓ Scope determines where variables exist.
✓ Curly braces create block scope.
✓ Functions create function scope.
✓ Loops create their own scope.
✓ Global variables are accessible inside
  inner scopes.
✓ Inner variables are NOT accessible
  outside their scope.
✓ Keep variables as local as possible.

========================================
End of Lesson 11
========================================
*/