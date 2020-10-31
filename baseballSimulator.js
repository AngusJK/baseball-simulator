let outs = 0;
let inning = 1;
let runs = 0;
let onFirst = 0;
let onSecond = 0;
let onThird = 0;
let totalRunners = onFirst + onSecond + onThird;
let gameOver = false;

const advanceRunners = function(basesAchieved) {
  if (basesAchieved === 1) {
    if (onFirst === 0) {
      onFirst = 1;
    } else if (onFirst === 1) {
      if (onSecond === 0) {
        onSecond = 1;
      } else if (onSecond === 1) {
        if (onThird === 0) {
          onThird = 1;
        } else if (onThird === 1) {
          runs += 1;
        }
      }
    }
  };
  if (basesAchieved === 2) {
    if (onSecond === 0) {
      onSecond = 1;
    } else if (onSecond === 1) {
      if (onThird === 0) {
        onThird = 1;
      } else if (onThird === 1) {
        runs += 1;
      }
    }
  };
  if (basesAchieved === 3) {
    runs += totalRunners;
    onFirst = 0;
    onSecond = 0;
    onThird = 1;
  }
};

let play = "";
const pitch = function() {
  
  let result = Math.floor(Math.random() * 101);
  if (result >= 0 && result <= 67) {
    play = "out";
  } else if (result >= 68 && result <= 76) {
    play = "walk";
  } else if (result >= 77 && result <= 90) {
    play = "single";
  } else if (result >= 91 && result <= 95) {
    play = "double";
  } else if (result === 96) {
    play = "triple";
  } else {
    play = "home run";
  };
  moveRunners();
}; 
  
const moveRunners = function() {
  if (play === "out") {
    outs += 1;
  }
  if (outs === 3) {
    inning += 1;
    outs = 0;
  }
  if (inning > 9) {
    gameOver = true;
  }
  if (gameOver === true) {
    console.log("GAME OVER");
  }
  if (play === "walk" || play === "single") {
    advanceRunners(1);
  }
  if (play === "double") {
    advanceRunners(2);
  }
  if (play === "triple") {
    advanceRunners(3);
  }
  if (play === "home run") {
    runs += 1;
    runs += totalRunners;
  }
};

pitch();

console.log(`Result: ${play}`);
console.log(`${outs} out(s)`);
console.log(`Runs: ${runs}`);
console.log(`Inning: ${inning}`);
console.log(`Runner on first: ${onFirst}`);
console.log(`Runner on second: ${onSecond}`);
console.log(`Runner on third: ${onThird}`);


// node baseballSimulator.js


