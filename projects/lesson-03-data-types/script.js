/*
  Lesson 3 Project — Save File Inspector
  =======================================
  Practice: strings, numbers, booleans, undefined, null,
            typeof, type differences, template literals

  Open index.html in your browser, then work through
  each STEP below. Check the console after every step.

  The page will stay on placeholders until you complete
  the final display step at the end.
*/


// ══════════════════════════════════════════════════════
// HELPER CODE — DO NOT MODIFY YET
// ══════════════════════════════════════════════════════
// This function updates the page. You will call it once
// at the very end (Step 13). You do not need to understand
// how it works right now.

function displaySaveInspector(row1, row2, row3, row4, row5, row6, row7, row8, finalRow) {
  document.getElementById("row-1").textContent = row1;
  document.getElementById("row-2").textContent = row2;
  document.getElementById("row-3").textContent = row3;
  document.getElementById("row-4").textContent = row4;
  document.getElementById("row-5").textContent = row5;
  document.getElementById("row-6").textContent = row6;
  document.getElementById("row-7").textContent = row7;
  document.getElementById("row-8").textContent = row8;
  document.getElementById("row-final").textContent = finalRow;
}


// ══════════════════════════════════════════════════════
// YOUR EXERCISES START HERE
// ══════════════════════════════════════════════════════


// ── STEP 1: Create a string variable ───────────────────
// Create a let variable called saveName (string).
// Give it the name of a game save file or game title.

// YOUR CODE HERE:

let saveName = 'Save Game 1'; 


// ── STEP 2: Create a number variable ───────────────────
// Create a let variable called playerLevel (number).

// YOUR CODE HERE:

let playerLevel = 1; 

// ── STEP 3: Create a boolean variable ──────────────────
// Create a let variable called isMultiplayer (boolean).

// YOUR CODE HERE:

let isMultiplayer = false; 


// ── STEP 4: Create an undefined variable ───────────────
// Declare a let variable called lastPlayed with NO value assigned.
// Do not set it to null — leave it undefined.

// YOUR CODE HERE:

let lastPlayed = undefined;


// ── STEP 5: Create a null variable ─────────────────────
// Create a let variable called cloudBackup and set it to null.

// YOUR CODE HERE:

let cloudBackup = null;


// ── STEP 6: Use typeof on your variables ───────────────
// Create a new let variable for the typeof result of EACH
// variable from Steps 1–5:
//
//   typeOfSaveName
//   typeOfPlayerLevel
//   typeOfIsMultiplayer
//   typeOfLastPlayed
//   typeOfCloudBackup
//
// Use typeof on the original variable and store the result.

// YOUR CODE HERE:

let typeOfSaveName = typeof saveName;
let typeOfPlayerLevel = typeof playerLevel;
let typeOfIsMultiplayer = typeof isMultiplayer;
let typeOfLastPlayed = typeof lastPlayed;
let typeOfCloudBackup = typeof cloudBackup;


// ── STEP 7: Compare 100 and "100" ──────────────────────
// Create a let variable called numberScore set to 100 (number).
// Create a let variable called stringScore set to "100" (string).
// Create let variables to store the typeof result of each:
//   typeOfNumberScore
//   typeOfStringScore
// console.log() both typeof results so you can see the difference.

// YOUR CODE HERE:

let numberScore = 100; 
let stringScore = "100";
let typeOfNumberScore = typeof numberScore;
let typeOfStringScore = typeof stringScore; 


// ── STEP 8: Compare true and "true" ────────────────────
// Create a let variable called boolFlag set to true (boolean).
// Create a let variable called stringFlag set to "true" (string).
// Create let variables to store the typeof result of each:
//   typeOfBoolFlag
//   typeOfStringFlag
// console.log() both typeof results so you can see the difference.

// YOUR CODE HERE:

let boolFlag = true;
let stringFlag = "true";

let typeOfBoolFlag = typeof boolFlag;
let typeOfStringFlag = typeof stringFlag;

console.log(typeOfBoolFlag);
console.log(typeOfStringFlag);

// ── STEP 9: Template literal with mixed types ──────────
// Create a let variable called saveSummary.
// Use a template literal to build a sentence that includes
// saveName, playerLevel, and isMultiplayer.
// console.log(saveSummary).

// YOUR CODE HERE:

let saveSummary = `${saveName} is at level ${playerLevel} and multiplayer status is ${isMultiplayer}.`;
console.log(saveSummary);

// ── STEP 10: Reassign and recheck the type ─────────────
// Reassign playerLevel to a STRING value (pick any string).
// Create a let variable called typeOfPlayerLevelAfter.
// Store the new typeof playerLevel result in it.
// console.log(typeOfPlayerLevelAfter).

// YOUR CODE HERE:






// ── STEP 11: Build inspector display lines ─────────────
// Use template literals to create display strings for the
// inspector panel. Create these let variables:
//
//   inspectorRow1  — includes saveName and typeOfSaveName
//   inspectorRow2  — includes playerLevel and typeOfPlayerLevelAfter
//   inspectorRow3  — includes isMultiplayer and typeOfIsMultiplayer
//   inspectorRow4  — includes lastPlayed and typeOfLastPlayed
//   inspectorRow5  — includes cloudBackup and typeOfCloudBackup
//   inspectorRow6  — includes numberScore, stringScore,
//                    typeOfNumberScore, and typeOfStringScore
//   inspectorRow7  — includes boolFlag, stringFlag,
//                    typeOfBoolFlag, and typeOfStringFlag
//   inspectorRow8  — includes playerLevel and typeOfPlayerLevelAfter
//                    (describe that the type changed after reassignment)

// YOUR CODE HERE:


// ── STEP 12: Log your important results ────────────────
// console.log() all five typeof results from Step 6.
// console.log() saveSummary.
// console.log() typeOfPlayerLevelAfter.

// YOUR CODE HERE:


// ── STEP 13: Display on the page (prebuilt helper) ─────
// Call the helper function with your inspector row variables.
// This is prebuilt display code — not part of the Lesson 3 material.
// Copy this line and use YOUR variable names as the arguments:
//
// displaySaveInspector(inspectorRow1, inspectorRow2, inspectorRow3, inspectorRow4, inspectorRow5, inspectorRow6, inspectorRow7, inspectorRow8, saveSummary);

// YOUR CODE HERE:


// ── BONUS (optional) ───────────────────────────────────
// Create a let variable called mysteryValue with no value assigned.
// Create let variables to store:
//   typeOfMysteryValue   — typeof mysteryValue
//   typeOfNullValue      — typeof cloudBackup
// console.log() both results.
// Create a let variable called bonusReport using a template literal
// that includes both typeof results as text in one sentence.
// console.log(bonusReport).

// YOUR CODE HERE:

// ── STEP 10: Reassign and recheck the type ─────────────

playerLevel = "Level Complete";

let typeOfPlayerLevelAfter = typeof playerLevel;

console.log(typeOfPlayerLevelAfter);



// ── STEP 11: Build inspector display lines ─────────────

let inspectorRow1 = `Save Name: ${saveName} — Type: ${typeOfSaveName}`;

let inspectorRow2 = `Player Level: ${playerLevel} — Type: ${typeOfPlayerLevelAfter}`;

let inspectorRow3 = `Multiplayer: ${isMultiplayer} — Type: ${typeOfIsMultiplayer}`;

let inspectorRow4 = `Last Played: ${lastPlayed} — Type: ${typeOfLastPlayed}`;

let inspectorRow5 = `Cloud Backup: ${cloudBackup} — Type: ${typeOfCloudBackup}`;

let inspectorRow6 = `Number Score: ${numberScore} (${typeOfNumberScore}) — String Score: ${stringScore} (${typeOfStringScore})`;

let inspectorRow7 = `Boolean Flag: ${boolFlag} (${typeOfBoolFlag}) — String Flag: ${stringFlag} (${typeOfStringFlag})`;

let inspectorRow8 = `Player Level changed to "${playerLevel}", so its type is now ${typeOfPlayerLevelAfter}.`;



// ── STEP 12: Log your important results ────────────────

console.log(typeOfSaveName);
console.log(typeOfPlayerLevel);
console.log(typeOfIsMultiplayer);
console.log(typeOfLastPlayed);
console.log(typeOfCloudBackup);

console.log(saveSummary);
console.log(typeOfPlayerLevelAfter);



// ── STEP 13: Display on the page ───────────────────────

displaySaveInspector(
    inspectorRow1,
    inspectorRow2,
    inspectorRow3,
    inspectorRow4,
    inspectorRow5,
    inspectorRow6,
    inspectorRow7,
    inspectorRow8,
    saveSummary
);