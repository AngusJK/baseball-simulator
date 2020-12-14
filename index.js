const pitch = require('./pitch');
const updateCount = require('./updateCount');
const swing = require('./swing');
const ballInPlay = require('./ballInPlay');
const homeTeam = require('./baseballSimulator');
const visitingTeam = require('./baseballSimulator');
/*
const advanceRunners = require('./advanceRunners');
const updateTotalRunners = require('./updateTotalRunners');
*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num = 0;
let currentBatter = visitingTeam[num];
/*
const updateCurrentBatter = function() {
  num += 1;
  if (num === 10) {
    num = 1;
  }
  currentBatter = visitingTeam[num];
  return currentBatter;
}
*/
rl.question('Welcome to Major League Baseball Simulator 2020! Press "y" to play.\n', (answer1) => {
  if (answer1 === 'y') {
    console.log('Play ball!');
    
    console.log(`Now batting: ${currentBatter}`);
    let count = [0, 0];
    const throwPitch = function() {
      rl.question('Press "p" to throw a pitch.\n', (answer2) => {
        let inTheZone = pitch();
        let call = '';
        if (answer2 === 'p') {
          if (inTheZone === false) {
            call = "Ball";
            console.log(call);
            count[0] += 1;
            if (count[0] === 4) {
              count = [0, 0];
              console.log("Ball four. Batter walks.");
              num += 1;
              console.log(`Now batting, ${currentBatter}`);
              //updateCurrentBatter();
            } else {
            console.log(count);
            }
          } else {
            /*
          let pitchType = pitch();
          let pitchCall = '';
          let result = updateCount(pitchType);
          if (Array.isArray(result)) {
            console.log(`${pitchType}. ${result[0]} ball(s), ${result[1]} strike(s).`)
          } else {
            console.log(`${result}`);
            console.log(`Now batting, ${updateCurrentBatter()}`);
          }
          */
          //throwPitch();
          //if (pitchType === "Strike") {
            let randNum = Math.floor(Math.random() * 2);
            if (randNum === 0) {
              console.log("Batter swings!");
              let swingOutcome = swing();
              console.log(swingOutcome);
              if (swingOutcome === "Swing and miss" || (swingOutcome === "Foul" && count[1] < 2)) {
                call === "Strike";
                count[1] += 1;
                console.log(count);
                //let swingResult = updateCount("Strike");
                //console.log(`${swingResult[0]} ball(s), ${swingResult[1]} strikes.`);
              } else if (swingOutcome === "Foul" && result[1] === 2) {
                console.log("Foul ball. Count stays the same. Press 'p' to throw another pitch.");
                console.log(count);
              } else if (swingOutcome === "In play!") {
                let inPlayOutcome = ballInPlay();
                console.log(inPlayOutcome);
                //updateCurrentBatter();
                console.log(`Now batting, ${currentBatter}`);
                if (inPlayOutcome !== "out") {
                  //advanceRunners(currentBatter, inPlayOutcome);
                  //updateCurrentBatter();
                  num += 1;
                  console.log(`Now batting, ${currentBatter}`);
                  count = [0, 0];
                } 
              }
            } else {
              console.log("Called strike.");
              call = "Strike";
              count[1] += 1
              console.log(count);
            }
          }
        }
        throwPitch();
      })
    }
    throwPitch();
  } else {
    console.log('K, bye.');
    rl.close();
  }
})

/*
module.exports = {
  pitch,
  advanceRunners,
  updateTotalRunners
};

*/