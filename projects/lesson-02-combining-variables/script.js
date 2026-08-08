/*
  Lesson 2 Project — Mission Briefing
  ====================================
  Practice: combining variables, template literals,
            ${variable}, strings + numbers in sentences

  Open index.html in your browser, then work through
  each STEP below. Check the console after every step.

  The page will stay on placeholders until you complete
  the final display step at the end.
*/


// ══════════════════════════════════════════════════════
// HELPER CODE — DO NOT MODIFY YET
// ══════════════════════════════════════════════════════
// This function updates the page. You will call it once
// at the very end (Step 9). You do not need to understand
// how it works right now.

function displayMissionBriefing(line1, line2, line3, finalLine) {
  document.getElementById("line-1").textContent = line1;
  document.getElementById("line-2").textContent = line2;
  document.getElementById("line-3").textContent = line3;
  document.getElementById("line-final").textContent = finalLine;
}


// ══════════════════════════════════════════════════════
// YOUR EXERCISES START HERE
// ══════════════════════════════════════════════════════


// ── STEP 1: Create string variables ────────────────────
// Create a let variable for your player name (string).
// Create a let variable for your squad name (string).
// Create a let variable for your favorite game (string).

// YOUR CODE HERE:

let playerName = "Ryan";
let squadName = "RCS";
let favoriteGame = "Call of Duty";


// ── STEP 2: Create number variables ────────────────────
// Create a let variable for missionNumber (number).
// Create a let variable for hoursPlayed (number).

// YOUR CODE HERE:

let missionNumber = 1; 
let hoursPlayed = 0;

// ── STEP 3: Combine strings with + ─────────────────────
// Combine playerName and squadName into one string using +.
// Store the result in a let variable called callSign.

// YOUR CODE HERE:

let callSign = (playerName + " " + squadName);

// ── STEP 4: One variable inside a template literal ─────
// Create a let variable called greeting.
// Use a template literal (backticks) with ${} to insert
// ONLY playerName into a sentence.

// YOUR CODE HERE:

let greeting = `Hello ${playerName}`;


// ── STEP 5: Multiple variables in a template literal ───
// Create a let variable called missionIntro.
// Use a template literal to insert playerName, squadName,
// and favoriteGame into one sentence.

// YOUR CODE HERE:

let missionIntro = `Hello ${playerName} ${squadName}, get ready to play ${favoriteGame}`;

// ── STEP 6: Strings and numbers together ───────────────
// Create a let variable called missionStats.
// Use a template literal to insert missionNumber and
// hoursPlayed into one sentence.

// YOUR CODE HERE:

let missionStats = `You're on ${missionNumber} and have played ${hoursPlayed} hours`;


// ── STEP 7: Reassign a number variable ─────────────────
// Add 5 to hoursPlayed and store the result back into
// hoursPlayed.

// YOUR CODE HERE:

hoursPlayed = hoursPlayed + 5;;

// ── STEP 8: Sentence with the updated value ────────────
// Create a let variable called updatedStats.
// Use a template literal to make a NEW sentence that uses
// the updated hoursPlayed value.

// YOUR CODE HERE:

let updatedStats = `You have played ${hoursPlayed} hours`


// ── STEP 9: Log your work ──────────────────────────────
// console.log() each of these variables:
//   callSign, greeting, missionIntro, missionStats, updatedStats

// YOUR CODE HERE:

console.log(callSign, greeting, missionIntro, missionStats, updatedStats);


// ── STEP 10: Build your final briefing line ────────────
// Create a let variable called finalBriefing.
// Use a template literal to combine missionIntro and
// updatedStats into one final sentence.

// YOUR CODE HERE:

let finalBriefing = `${missionIntro} ${updatedStats}`;


// ── STEP 11: Display on the page (prebuilt helper) ─────
// Call the helper function below with your string variables.
// Copy this line and fill in YOUR variable names as the arguments:
//
// displayMissionBriefing(greeting, missionIntro, missionStats, finalBriefing);

// YOUR CODE HERE:

displayMissionBriefing(greeting, missionIntro, missionStats, finalBriefing);


// ── BONUS (optional) ───────────────────────────────────
// Create a const variable for a studio name (string).
// Create a let boolean variable called readyForDeployment.
// Create a let variable called deploymentStatus using a
// template literal that includes studioName, playerName,
// and readyForDeployment in one sentence.
// console.log(deploymentStatus);

// YOUR CODE HERE:

const studioName = "RyCreate Studio";
let readyForDeployment = true;

let deploymentStatus = `${studioName} says ${playerName} is ready for deployment: ${readyForDeployment}`;

console.log(deploymentStatus);