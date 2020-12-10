const pitch = require('./pitch');
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
    rl.question('Press "p" to throw a pitch.\n', (answer2) => {
      if (answer2 === 'p') {
        let pitchType = pitch();
        console.log(`First pitch is a ${pitchType}.`);
        rl.close();
      }
    })
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