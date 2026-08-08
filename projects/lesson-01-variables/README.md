# Lesson 1 Project — Player Profile

**Time:** ~15 minutes  
**Pairs with:** `lesson-1-variables.js`

Build a player profile card using variables. You'll see your values in the browser **and** in the console.

## How to run

1. Open `index.html` in your browser (double-click the file, or drag it into a browser tab).
2. Open the developer console:
   - Mac: `Cmd + Option + J`
   - Windows: `F12` → Console tab
3. Edit `script.js` and refresh the page after each step.

## What you'll practice

- `let` for values that change
- `const` for values that stay fixed
- Strings, numbers, and booleans
- Reassigning variables
- `console.log()`

## Steps

### Step 1 — String variables

```js
let playerName = "Ryan";
let favoriteGame = "Call of Duty";
```

### Step 2 — Number variables

```js
let level = 1;
let score = 0;
```

### Step 3 — Boolean variable

```js
let isOnline = true;
```

### Step 4 — Const variable

```js
const gameTitle = "RyCreateStudio RPG";
```

Try changing `gameTitle` later. You should see an error — that's `const` doing its job.

### Step 5 — Console.log

Log every variable:

```js
console.log(playerName);
console.log(favoriteGame);
console.log(level);
console.log(score);
console.log(isOnline);
console.log(gameTitle);
```

Check the console — you should see each value printed.

### Step 6 — Update the page

```js
updateProfile(playerName, gameTitle, level, score, isOnline);
```

Refresh. The card should show your player info.

### Step 7 — Reassign

```js
level = level + 1;
score = score + 100;

console.log(level);
console.log(score);

updateProfile(playerName, gameTitle, level, score, isOnline);
```

Refresh again. Level and score should be updated.

### Bonus — Toggle online status

```js
isOnline = false;
console.log(isOnline);
updateProfile(playerName, gameTitle, level, score, isOnline);
```

The status dot should turn red.

## Done?

When all steps are complete, your card should show your name, game, level, score, and online status — and your console should have logged every value along the way.

Next up: **Lesson 2 — Character Bio Generator** (template literals).
