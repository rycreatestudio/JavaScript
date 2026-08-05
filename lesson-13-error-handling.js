/* error-handling */

/*
========================================
Lesson 13 Summary - Error Handling
========================================

What is an Error?

An error means JavaScript tried to do
something it couldn't do.

Errors are clues.

Instead of thinking:

"My code is broken."

Think:

"What is JavaScript trying to tell me?"

----------------------------------------

ReferenceError

A ReferenceError happens when JavaScript
cannot find a variable.

Example:

console.log(username);

Output:

ReferenceError

username is not defined

Reason:

The variable does not exist.

Think:

"I can't find it."

----------------------------------------

TypeError

A TypeError happens when something exists,
but you're trying to use it incorrectly.

Example:

let age = 30;

age.push(40);

Output:

TypeError

Reason:

Numbers do not have a push() method.

Think:

"I found it...

...but you're using it the wrong way."

----------------------------------------

SyntaxError

A SyntaxError happens when JavaScript
cannot even read your code.

Example:

console.log("Hello";

Output:

SyntaxError

Reason:

Missing closing parenthesis.

Think:

"I don't understand what you wrote."

----------------------------------------

How to Debug

When you see an error, ask:

1.

What kind of error is it?

↓

2.

What line is causing it?

↓

3.

What is JavaScript complaining about?

These three questions solve many bugs.

----------------------------------------

JavaScript is Case Sensitive

Example:

let username = "Ryan";

console.log(userName);

ReferenceError

Reason:

username

is NOT the same as

userName

Capital letters matter.

----------------------------------------

try...catch

Sometimes you expect something
might fail.

Example:

try {

    console.log(userName);

} catch (error) {

    console.log("Oops!");

}

Instead of crashing,
JavaScript runs the catch block.

----------------------------------------

The error Variable

Example:

catch(error)

The word "error" is simply
a variable.

JavaScript stores information
about the error inside it.

Example:

catch(error) {

    console.log(error);

}

Useful for debugging.

----------------------------------------

Real QA Example

Imagine a Playwright test fails.

Instead of panicking,
read the error.

Ask:

✓ Does the variable exist?
✓ Am I using it correctly?
✓ Is there a syntax mistake?
✓ Which line caused the problem?

Think like a detective.

----------------------------------------

Key Takeaways

✓ Errors are helpful clues.
✓ ReferenceError = Variable not found.
✓ TypeError = Wrong use of an existing value.
✓ SyntaxError = Invalid JavaScript syntax.
✓ Read the entire error message.
✓ Check the line number.
✓ try...catch lets you handle expected errors.
✓ Debugging is a skill every developer uses.

========================================
End of Lesson 13
========================================
*/