//const args = process.argv.slice(2);
let homeTeam = "Dodgers";
let visitingTeam = "Rays";
let homeTeamRuns = 0;
let visitingTeamRuns = 0;
let runs = 0;
let teamAtBat = "";
let batter = 0;
let homeBatter = 1;
let visitorBatter = 1;
let outs = 0;
let inning = [1, 0];
let half = "";
let onFirst = 0;
let onSecond = 0;
let onThird = 0;
let totalRunners = 0;
// let score = `Score: ${visitingTeam} ${visitingTeamRuns}, ${homeTeam} ${homeTeamRuns}`;

const updateTotalRunners = function(nowOnBase) {
  totalRunners = nowOnBase;
};

const advanceRunners = function(basesAchieved) {
  if (basesAchieved === 1) {
    if (onFirst === 0) {
      onFirst = 1;
      updateTotalRunners(1);
    } else if (onFirst === 1) {
      if (onSecond === 0) {
        onSecond = 1;
        updateTotalRunners(2);
      } else if (onSecond === 1) {
        if (onThird === 0) {
          onThird = 1;
          updateTotalRunners(3);
        } else if (onThird === 1) {
          runs += 1;
          console.log("🔵  Run(s) scored!");
        }
      }
    }
  };
  if (basesAchieved === 2) {
    if (onFirst === 0 && onSecond === 0 && onThird === 0) {
      onSecond += 1;
      updateTotalRunners(1);
    };
    if (onFirst === 1 && onSecond === 0 && onThird === 0) {
      onFirst = 0;
      onSecond = 1;
      onThird = 1;
      updateTotalRunners(2);
    };
    if (onFirst === 1 && onSecond === 1 && onThird === 0) {
      onFirst = 0;
      onThird = 1;
      runs += 1;
      updateTotalRunners(2);
      console.log("🔵  Run(s) scored!");
    };
    if (onFirst === 1 && onSecond === 1 && onThird === 1) {
      onFirst = 0;
      runs += 2;
      console.log("🔵  Run(s) scored!");
    };
    if (onFirst === 0 && onSecond === 1 && onThird === 0) {
      onThird = 1;
    };
    if (onFirst === 0 && onSecond === 1 && onThird === 1) {
      runs += 1;
      console.log("🔵  Run(s) scored!");
    };
    if (onFirst === 1 && onSecond === 0 && onThird === 1) {
      onSecond = 1;
    };
    if (onFirst === 0 && onSecond === 0 && onThird === 0) {
      onSecond = 1;
    };
  };
  if (basesAchieved === 3) {
    runs += totalRunners;
    console.log("🔵  Run(s) scored!");
    onFirst = 0;
    onSecond = 0;
    onThird = 1;
  }
};

const pitch = function() {
  if (inning[0] > 3 && visitingTeamRuns !== homeTeamRuns) {
    console.log("GAME OVER");
    console.log(`Final score: ${visitingTeam}: ${visitingTeamRuns}, ${homeTeam}: ${homeTeamRuns}`);
  } else {
    if (inning[1] === 0) {
        half = "Top";
        teamAtBat = visitingTeam;
        batter = visitorBatter;
      } else if (inning[1] === 1) {
        half = "Bottom";
        teamAtBat = homeTeam;
        batter = homeBatter;
      };
    console.log(`⚾️  ${half} of inning number ${inning[0]}`);
    while (outs < 3) {
      let play = "";
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
      console.log(`Batter: ${batter} ${play}`);
      if (play === "out") {
        outs += 1;
      } else if (play === "walk" || play === "single") {
        advanceRunners(1);
      } else if (play === "double") {
        advanceRunners(2);
      } else if (play === "triple") {
        advanceRunners(3);
      } else if (play === "home run") {
        runs += 1;
        runs += totalRunners;
        onFirst = 0;
        onSecond = 0;
        onThird = 0;
        console.log("🔵  Run(s) scored!");
        };
      batter += 1;
      if (batter === 10) {
        batter = 1;
      };
    };
    console.log(`3 out, inning over`);
    if (inning[1] === 0) {
      visitorBatter = batter;
      /*
      if (visitorBatter > 9) {
        visitorBatter = visitorBatter - 9;
      }
      */
    } else if (inning[1] === 1) {
      homeBatter = batter;
      /*
      if (homeBatter > 9) {
        homeBatter = homeBatter - 9;
      }
      */
    };
    if (inning[1] === 0) {
      inning[1] = 1;
    } else if (inning[1] === 1) {
      inning[1] = 0;
      inning[0] += 1;
    };
    outs = 0;
    onFirst = 0;
    onSecond = 0;
    onThird = 0;
    
    if (teamAtBat === visitingTeam) {
      visitingTeamRuns += runs;
    } else if (teamAtBat === homeTeam) {
      homeTeamRuns += runs;
    };
    console.log(`Score: ${visitingTeam} ${visitingTeamRuns}, ${homeTeam} ${homeTeamRuns}`);
    batter = 0;
    runs = 0;
    pitch();
  };
}; 

pitch();
/*
console.log(`Runs: ${runs}`);
console.log(`Inning: ${inning}`);
console.log(`Runner on first: ${onFirst}`);
console.log(`Runner on second: ${onSecond}`);
console.log(`Runner on third: ${onThird}`);
*/


// node baseballSimulator.js


