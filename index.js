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

rl.question('Welcome to Major League Baseball Simulator 2020! Press "y" to play.\n', (answer1) => {
  if (answer1 === 'y') {
    console.log('Play ball!');
    ///////////////
    const throwPitch = function() {
      rl.question('Press "p" to throw a pitch.\n', (answer2) => {
        if (answer2 === 'p') {
          let inZone = false;
          if (inZone === false) {
            count[0] += 1;
            if (count[0] === 4) {
              console.log("Ball 4. Batter walks.");
              count = [0, 0];
            } else {
              console.log(count);
            }
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