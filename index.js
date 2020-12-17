const pitch = require('./pitch');
const updateCount = require('./updateCount');
const swing = require('./swing');
const ballInPlay = require('./ballInPlay');
const homeTeam = require('./baseballSimulator');
const visitingTeam = require('./createPlayer');
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
let atBatOver = false;
const updateBatter = function() {
  batterIndex += 1;
  if (batterIndex === 9) {
    batterIndex = 0;
  }
  currentBatter = visitingTeam[batterIndex];
  return currentBatter;
}

const handleStrike = function(strikeType) {
  console.log(`${strikeType} strike.`);
  count[1] += 1;
  if (count[1] === 3) { // if there are 3 strikes, call the batter out
    console.log(`Strike 3. ${currentBatter} is out.`);
    atBatOver = true;
    outs += 1;
    console.log(`${outs} out.`);
    count = [0, 0];
    if (outs === 3) { // if there are 3 outs, the inning is over
      console.log("Inning over.");
      outs = 0;
    }
  } else {
    console.log(count);
  }
} 

rl.question('Welcome to Major League Baseball Simulator 2020! Press "y" to play.\n', (answer1) => {
  if (answer1 === 'y') {
    console.log('Play ball!');
    ///////////////
    console.log(`First batter up: ${currentBatter.name}, ${currentBatter.position}.`);
    const throwPitch = function() {
      rl.question('Press "p" to throw a pitch.\n', (answer2) => {
        if (answer2 === 'p') { // if the user presses P, determine whether the pitch was in the zone
          let inZone = pitch();
          if (inZone === false) { // if the pitch is not in the zone, call it a ball
            console.log("Ball");
            count[0] += 1;
            if (count[0] === 4) { // if there are 4 ball, the batter walks
              console.log(`Ball 4. ${currentBatter} walks.`);
              atBatOver = true;
              count = [0, 0];
            } else {
              console.log(count);
            }
          } else { // if the pitch is in the zone, determine whether the batter swings
            let batterSwings = true;
            let randNum = Math.floor(Math.random() * 2);
            if (randNum < 0.5) {
              batterSwings = false;
            } 
            if (batterSwings === false) { // if the batter doesn't swing, call it a strike
              handleStrike("Called");
            } else { // if the batter swings, determine the result of the swing
              let swingResult = swing();
              if (swingResult === "Swing and miss") { // if the batter swings and misses, it's a strike
                handleStrike("Swinging");
              } else if (swingResult === "Foul") { 
                if (count[1] === 2) { // a foul with 2 strikes doesn't change the count
                  console.log("Foul ball. Count remains the same.");
                } else { // a foul with less than 2 strikes is called a strike
                  handleStrike("Foul");
                } 
              } else {
                console.log("In play!");
                let inPlayResult = ballInPlay();
                console.log(inPlayResult);
                if (inPlayResult === "out") {
                  outs += 1;
                  if (outs === 3) {
                    console.log("Three outs. Inning over.");
                    outs = 0;
                  }
                }
                count = [0, 0];
                atBatOver = true;
              }
            }
          }
          if (atBatOver === true) {
            updateBatter();
            console.log(`Now batting: ${currentBatter}.`);
          }
          throwPitch();
          atBatOver = false;
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