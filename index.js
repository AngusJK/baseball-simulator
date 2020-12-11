const pitch = require('./pitch');
const updateCount = require('./updateCount');
const swing = require('./swing');
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

rl.question('Welcome to Major League Baseball Simulator 2020! Press "y" to play.\n', (answer1) => {
  if (answer1 === 'y') {
    console.log('Play ball!');
    currentBatter = visitingTeam[0];
    console.log(`Now batting: ${currentBatter}`);
    const throwPitch = function() {
      rl.question('Press "p" to throw a pitch.\n', (answer2) => {
        if (answer2 === 'p') {
          let pitchType = pitch();
          let result = updateCount(pitchType);
          if (Array.isArray(result)) {
            console.log(`${pitchType}. ${result[0]} ball(s), ${result[1]} strike(s).`)
          } else {
            console.log(`${result}`);
          }
          throwPitch();
          if (pitchType === 'Strike') {
            let randNum = Math.floor(Math.random() * 2);
            if (randNum === 0) {
              console.log('Batter swings!');
              let swingOutcome = swing();
              if (swingOutcome === "Swing and miss" || (swingOutcome === "Foul" && result[1] < 2)) {
                let swingResult = updateCount("Strike");
                console.log(swingResult);
              } else if (swingOutcome === "Foul" && result[1] === 2) {
                console.log("Foul ball. Count stays the same.");
              } else if (swingOutcome === "In play!") {
                console.log(swingOutcome);
              }
            } 
          }
        }
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