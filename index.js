const pitch = require('./pitch');
//const updateCount = require('./updateCount');
const swing = require('./swing');
const ballInPlay = require('./ballInPlay');
const teams = require('./createPlayer');
const advanceRunners = require('./advanceRunners');
//const updateTotalRunners = require('./updateTotalRunners');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const visitingTeam = teams[0];
const homeTeam = teams[1];
let inning = [1, 0];
let count = [0, 0];
let outs = 0;
let visitorBatterIndex = 0;
let homeBatterIndex = 8;
let currentBatter = visitingTeam[visitorBatterIndex];
let atBatOver = false;

const updateBatter = function() {
  if (inning[1] === 1) {
    homeBatterIndex += 1;
    if (homeBatterIndex === 9) {
      homeBatterIndex = 0;
    }
    currentBatter = homeTeam[homeBatterIndex];
  }  
  if (inning[1] === 0) {  
    visitorBatterIndex += 1
    if (visitorBatterIndex === 9) {
      visitorBatterIndex = 0;
    }
    currentBatter = visitingTeam[visitorBatterIndex];  
  }
  return currentBatter;
}

const setInning = function() {
  if (inning[1] === 0) {
    inning[1] = 1
  } else {
    inning[0] += 1;
    inning[1] = 0;
  }
}

const displayInning = function() {
  let topOrBottom = "Top";
  if (inning[1] === 1) {
    topOrBottom = "Bottom";
  }
  console.log(`${topOrBottom} of inning ${inning[0]}.`);
}

const handleStrike = function(strikeType) {
  console.log(`${strikeType} strike.`);
  count[1] += 1;
  if (count[1] === 3) { // if there are 3 strikes, call the batter out
    console.log(`Strike 3. ${currentBatter.name} is out.`);
    atBatOver = true;
    outs += 1;
    console.log(`${outs} out.`);
    count = [0, 0];
    if (outs === 3) { // if there are 3 outs, the inning is over
      setInning();
      displayInning();
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
    console.log(`Top of inning ${inning[0]}.`)
    console.log(`First batter up: ${currentBatter.name}, ${currentBatter.position}.`);
    const throwPitch = function() {
      rl.question('Press "p" to throw a pitch.\n', (answer2) => {
        if (answer2 === 'p') { // if the user presses P, determine whether the pitch was in the zone
          let inZone = pitch();
          if (inZone === false) { // if the pitch is not in the zone, call it a ball
            console.log("Ball");
            count[0] += 1;
            if (count[0] === 4) { // if there are 4 ball, the batter walks
              console.log(`Ball 4. ${currentBatter.name} walks.`);
              let baseState = advanceRunners(currentBatter.name, "walk");
              console.log(baseState);
              atBatOver = true;
              count = [0, 0];
            } else {
              console.log(count);
            }
          } else { // if the pitch is in the zone, determine whether the batter swings
            let batterSwings = true;
            let randNum = Math.random();
            if (randNum < 0.1) {
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
                if (inPlayResult === "out") {
                  outs += 1;
                  console.log(`${currentBatter.name} is out.`);
                  console.log(`${outs} out.`);
                  if (outs === 3) {
                    console.log("Three outs. Inning over.");
                    setInning();
                    displayInning();
                    outs = 0;
                  }
                } else {
                  console.log(inPlayResult);
                  let baseState = advanceRunners(currentBatter.name, inPlayResult);
                  console.log(baseState[0]);
                  for (let x = 0; x < baseState[1].length; x++) {
                    console.log(baseState[1][x]);
                  }
                }
                count = [0, 0];
                atBatOver = true;
              }
            }
          }
          if (atBatOver === true) {
            updateBatter();
            console.log(`Now batting: ${currentBatter.name}, ${currentBatter.position}.`);
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