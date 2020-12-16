const pitch = require('./pitch');
const updateCount = require('./updateCount');
const swing = require('./swing');
const ballInPlay = require('./ballInPlay');
const homeTeam = require('./baseballSimulator');
const visitingTeam = require('./baseballSimulator');
const advanceRunners = require('./advanceRunners');
const updateTotalRunners = require('./updateTotalRunners');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = [0, 0];
let outs = 0;
let batterIndex = 0;
let currentBatter = visitingTeam[batterIndex];
const updateBatter = function() {
  batterIndex += 1;
  if (batterIndex === 9) {
    batterIndex = 0;
  }
  currentBatter = visitingTeam[batterIndex];
  return currentBatter;
}


rl.question('Welcome to Major League Baseball Simulator 2020! Press "y" to play.\n', (answer1) => {
  if (answer1 === 'y') {
    console.log('Play ball!');
    ///////////////
    console.log(`First batter up: ${currentBatter}.`);
    const throwPitch = function() {
      rl.question('Press "p" to throw a pitch.\n', (answer2) => {
        let atBatOver = false;
        if (answer2 === 'p') {
          let inZone = pitch();
          if (inZone === false) {
            console.log("Ball");
            count[0] += 1;
            if (count[0] === 4) {
              console.log(`Ball 4. ${currentBatter} walks.`);
              atBatOver = true;
              count = [0, 0];
            } else {
              console.log(count);
            }
          } else {
            console.log("Strike");
            count[1] += 1;
            if (count[1] === 3) {
              console.log(`Strike 3. ${currentBatter} is out.`);
              atBatOver = true;
              outs += 1;
              console.log(`${outs} out.`);
              count = [0, 0];
              if (outs === 3) {
                console.log("Inning over.");
                outs = 0;
              }
            } else {
              console.log(count);
            }
          }
          if (atBatOver === true) {
            updateBatter();
            console.log(`Now batting: ${currentBatter}.`);
          }
          throwPitch();
        } else {
          console.log("You didn't press P. Bye.");
          rl.close();
        }
      })
    }
    throwPitch();
    ///////////
  } else {
    console.log("Okay. Never mind then.");
    rl.close();
  }
});