/*
====================================
JavaScript Learning Journey
RyCreateStudio

Lesson 5 - Conditionals

Description:
Conditionals allow your programs to make decisions based on whether a condition is true or false. Instead of executing every line of code from top to bottom, your program can choose different paths using if, else if, and else statements.

Topics:
- if Statements
- else Statements
- else if Statements
- Comparison Operators
- Logical Operators
- Nested Conditionals

By the end of this lesson you will be able to:
✓ Make decisions in your code
✓ Execute different code based on conditions
✓ Combine comparison and logical operators
✓ Build simple decision-making programs

Prerequisite:
✓ Lesson 4 - Operators

====================================
*/

/*

if (10 > 5) {
    console.log("10 is greater than 5");
}
*/

/*

let isRaining = false; 
if (isRaining) {
    console.log("It's raining, bring an umbrella!");
} else {
    console.log("No rain today, enjoy the sunshine!");
}
*/

/*

let isRaining = true;
if (isRaining) {
    console.log("It's raining, bring an umbrella!");
} else {
    console.log("No rain today, enjoy the sunshine!");
}
*/

/* if else concepts, grade scale example

let score = 85;
if (score >= 90) {
    console.log("You got an A!");
} else if (score >= 80) {
    console.log("You got a B!");
} else if (score >= 70) {
    console.log("You got a C!");
} else if (score >= 60) {
    console.log("You got a D!");
} else {
    console.log("You got an F!");
}   

*/

/* if else concepts, temperature example

let temperature = 78; 

if (temperature >=90) {
    console.log("It's really hot outside!");
} else if (temperature >= 75) {
    console.log("It's Warm.");
} else if (temperature >= 60) {
    console.log("It's a bit chilly.");
}

*/

/* Nested conditionals example
let age = 25; 
let hasLicense = true;

if (age >= 18)
    if (hasLicense) {
        console.log("You can drive!");
    }
*/

/* Nested conditionals example with else statement

let age = 16;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive.");
    }
} else {
    console.log("You are too young to drive.");
}
*/

/* my attempt: real world example of nested conditionals

let temperature = 60; 

if (temperature <= 60) {
    console.log("Wear a jacket.");
} else if (temperature >= 90) {
    console.log("Wear shorts)");
}

Notes: what happens if it's 75 out? Nothing gets printed

correction: 

if (temperature <= 60) {
    console.log("Wear a jacket.");
} else {
    console.log("Wear shorts.");
}

*/

let username = "Ryan";
let password = "JavaScript123"

if (username === "Ryan" && password === "JavaScript123") {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}

/*
====================================
Lesson 5 Summary - Conditionals

What I Learned:
✓ What an if statement is
✓ How to use else
✓ How to use else if
✓ How nested if statements work
✓ How JavaScript makes decisions based on true or false conditions

Key Concepts:

if
- Executes code only if a condition is true.

else
- Executes code if the if condition is false.

else if
- Allows JavaScript to check multiple conditions.
- JavaScript stops at the first condition that is true.

Nested if
- An if statement inside another if statement.
- The inner if only runs if the outer if is true.

Comparison Operators:
>   Greater than
<   Less than
>=  Greater than or equal to
<=  Less than or equal to
=== Strict equality

Logical Operators:
&&  AND (both conditions must be true)
||  OR (at least one condition must be true)

Important Things to Remember:
✓ if asks a question.
✓ The condition must evaluate to true or false.
✓ Only one branch of an if / else if / else chain executes.
✓ JavaScript stops checking once it finds the first true condition.
✓ Nested if statements only execute if the outer condition is true.

Exercises Completed:
🏋️ Exercise 5.1 - Weather Decision Program ✅
🎯 Interview Challenge 5.1 - Login Validation ✅

Confidence:
⭐⭐⭐⭐⭐ (5/5)

====================================
*/