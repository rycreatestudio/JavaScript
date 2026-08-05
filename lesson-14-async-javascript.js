//lesson-14-async-javascript

/* console.log("Wake up");

console.log("Eat breakfast");

console.log("Start");

await orderPizza();

console.log("Eat");

console.log("Go home"); */

// test("Login", async ({ page }) => {

//     await page.goto("https://example.com");

// });

/*
========================================
Lesson 14 Summary - Async JavaScript
========================================

What is Asynchronous JavaScript?

Some tasks take time to finish.

Examples:

- Loading a website
- Reading a file
- Calling an API
- Waiting for a database
- Waiting for a button click

Instead of freezing the entire program,
JavaScript can wait for these tasks
while managing them correctly.

----------------------------------------

Synchronous Code

Synchronous means:

Do one thing.

Finish it.

Then do the next thing.

Example:

console.log("Wake up");
console.log("Eat breakfast");
console.log("Go to work");

Output:

Wake up
Eat breakfast
Go to work

Everything happens in order.

----------------------------------------

Asynchronous Code

Some operations take time.

Example:

Ordering a pizza.

You place the order.

The pizza is not ready instantly.

JavaScript needs a way to wait
before continuing.

----------------------------------------

await

await means:

"Wait until this operation finishes,
then continue."

Example:

await orderPizza();

Think:

Wait for the pizza.

Then continue.

----------------------------------------

async

async tells JavaScript:

"This function will contain
asynchronous work."

Example:

async function login() {

}

Functions using await are typically
declared as async.

----------------------------------------

Real Playwright Example

async function login() {

    await page.goto("website");

    await page.click("#login");

}

Read this in English:

"This login function performs work
that takes time.

Wait for the page to load.

Then wait for the login click
to complete."

----------------------------------------

Why Playwright Uses await

Websites are not instant.

Without await:

Open website

↓

Click button immediately

↓

❌ Page may not be ready

With await:

Open website

↓

Wait

↓

Page finishes loading

↓

Click button

↓

✅ Success

----------------------------------------

Pizza Analogy

Order pizza.

↓

Wait.

↓

Pizza is ready.

↓

Continue.

That is exactly what await does.

----------------------------------------

Key Takeaways

✓ Some operations take time.
✓ await waits for an operation to finish.
✓ async marks a function that performs
  asynchronous work.
✓ Playwright uses await constantly.
✓ Read async code like English.
✓ Don't fear async—it's simply waiting
  for things that take time.

========================================
End of Lesson 14
========================================