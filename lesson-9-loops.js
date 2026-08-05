/* lesson-9-loops.js */

//checks 100 users with little code 

/*

for (let i = 1; i <= 100; i++) {
    console.log("Checking user " + i);
}
*/

/*
//counting hello using a for loop 
for (let i = 1; i <= 5; i++) {
    console.log("Hello");
}

*/

/* example of a for loop that iterates through an array of buttons and logs each button to the console.

let buttons = ["Login", "Sign Up", "Submit", "Cancel"];

for (let i = 0; i < buttons.length; i++) {
    console.log("Testing button: " + buttons[i]);    
}
*/

/* example of a for loop that iterates through an array of QA tools and logs each tool to the console.
let qaTools = ["Playwright", "Postman", "Jira"];

for (let tool of qaTools) {
    console.log(tool);
}
    */

/*
========================================
Lesson 9 Summary - Loops
========================================

What is a loop?
- A loop repeats code multiple times.
- It saves us from writing the same code over and over.

Basic for loop:

for (let i = 0; i < 5; i++) {
    console.log(i);
}

The 3 parts of a for loop:
1. let i = 0;      // Starting point
2. i < 5;          // Continue while true
3. i++;            // Increase by 1 each loop

Other increments:
i--      // Count backwards
i += 2   // Count by twos

----------------------------------------

Looping through arrays:

let cars = ["Lexus", "Toyota", "Mazda"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

----------------------------------------

.length

Returns the number of items in an array.

cars.length

returns:

3

Valid indexes:

0
1
2

Remember:

length = number of items
last index = length - 1

----------------------------------------

Common mistake:

❌ i <= cars.length

This eventually tries to access:

cars[3]

which doesn't exist, so JavaScript returns:

undefined

Correct:

✅ i < cars.length

----------------------------------------

for...of

for (let car of cars) {
    console.log(car);
}

Read it like English:

"For each car in cars..."

JavaScript automatically assigns each item to the
variable (car) one at a time.

Iteration 1:
car = "Lexus"

Iteration 2:
car = "Toyota"

Iteration 3:
car = "Mazda"

----------------------------------------

Choosing the right loop

Use a regular for loop:
- When you need the index (0, 1, 2...)
- When counting up or down
- When skipping items

Use for...of:
- When you only need each item
- Cleaner and easier to read

----------------------------------------

Real QA Example

let buttons = ["Login", "Cart", "Checkout"];

for (let button of buttons) {
    console.log("Testing " + button);
}

Later in Playwright:

await button.click();

----------------------------------------

Key Takeaways

✓ Loops repeat code.
✓ Arrays have indexes starting at 0.
✓ length is the number of items.
✓ Last index = length - 1.
✓ for...of gives you each item directly.
✓ Use the simplest loop that fits the job.

========================================
End of Lesson 9
========================================
*/

