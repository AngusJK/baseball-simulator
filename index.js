const pitch = require('./pitch');
const updateCount = require('./updateCount');
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