/*
  Lesson 1 Project — Player Profile
  ==================================
  Practice: let, const, strings, numbers, booleans,
            reassigning variables, console.log()

  Open index.html in your browser, then work through
  each STEP below. Check the console after every step.
*/


// ── Helper (already done for you) ──────────────────────
// Pass your variables in here to update the page.
function updateProfile(name, game, level, score, isOnline) {
  document.getElementById("player-name").textContent = name;
  document.getElementById("game-title").textContent = game;
  document.getElementById("level").textContent = level;
  document.getElementById("score").textContent = score;

  const dot  = document.getElementById("status-dot");
  const text = document.getElementById("status-text");

  if (isOnline) {
    dot.className = "dot online";
    text.textContent = "Online";
  } else {
    dot.className = "dot offline";
    text.textContent = "Offline";
  }
}


// ── STEP 1: Create string variables ────────────────────
// Create a let variable for your player name (string).
// Create a let variable for your favorite game (string).

// YOUR CODE HERE:

let playerName = "Ryan";

let favoriteGame = "Call of Duty";

// ── STEP 2: Create number variables ────────────────────
// Create a let variable for level (number).
// Create a let variable for score (number).

// YOUR CODE HERE:

let level = 1;

let score = 0; 


// ── STEP 3: Create a boolean variable ──────────────────
// Create a let variable called isOnline (true or false).

// YOUR CODE HERE:

let isOnline = true;

// ── STEP 4: Create a const variable ────────────────────
// Create a const for the game title shown on the card.
// Try changing it later — what happens?

// YOUR CODE HERE:

const game = "Hanu's Flight";


// ── STEP 5: Log everything to the console ──────────────
// console.log() each variable you created above.

// YOUR CODE HERE:

console.log(playerName);
console.log(favoriteGame);
console.log(level);
console.log(score);
console.log(isOnline);
console.log(game);

// ── STEP 6: Display on the page ───────────────────────
// Call updateProfile() with your variables as arguments.
// Example: updateProfile(playerName, gameTitle, level, score, isOnline);

// YOUR CODE HERE:

updateProfile(playerName, favoriteGame, level, score, isOnline);


// ── STEP 7: Reassign a variable ────────────────────────
// Change level to level + 1.
// Change score to score + 100.
// Log the new values, then call updateProfile() again.

// YOUR CODE HERE:

level = level + 1;
score = score + 100;

console.log(level);
console.log(score);
updateProfile(playerName, game, level, score, isOnline);


// ── BONUS (optional) ───────────────────────────────────
// Set isOnline to the opposite value (true → false or vice versa).
// Log it and call updateProfile() one more time.

// YOUR CODE HERE:

isOnline = false;
console.log(isOnline);

updateProfile(playerName, game, level, score, isOnline);