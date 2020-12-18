/*
const visitingTeam = require('./baseballSimulator');
const homeTeam = require('./baseballSimulator');
var onFirst = require('./baseballSimulator');
var onSecond = require('./baseballSimulator');
var onThird = require('./baseballSimulator');
var teamAtBat = require('./baseballSimulator');
var visitingTeamRuns = require('./baseballSimulator');
var homeTeamRuns = require('./baseballSimulator');
var totalRunners = require('./baseballSimulator');
var inning = require('./baseballSimulator');
*/
/*
const advanceRunners = function(batter, basesAchieved) {
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
          if (teamAtBat === visitingTeam) {
            visitingTeamRuns += 1; 
            } else if (teamAtBat === homeTeam) {
              homeTeamRuns += 1;
            };
          console.log(`🔵  ${visitingTeam} ${visitingTeamRuns}, ${homeTeam} ${homeTeamRuns}`);
          };
        };
      };
  };
  if (basesAchieved === 2) {
    if (onFirst === 0 && onSecond === 0 && onThird === 0) {
      onSecond += 1;
      updateTotalRunners(1);
    } else if (onFirst === 1 && onSecond === 0 && onThird === 0) {
      onFirst = 0;
      onSecond = 1;
      onThird = 1;
      updateTotalRunners(2);
    } else if (onFirst === 1 && onSecond === 1 && onThird === 0) {
      onFirst = 0;
      onThird = 1;
      if (teamAtBat === visitingTeam) {
        visitingTeamRuns += 1; 
        } else if (teamAtBat === homeTeam) {
          homeTeamRuns += 1;
        };
      console.log(`🔵  ${visitingTeam} ${visitingTeamRuns}, ${homeTeam} ${homeTeamRuns}`);
    } else if (onFirst === 1 && onSecond === 1 && onThird === 1) {
      onFirst = 0;
      updateTotalRunners(2);
      if (teamAtBat === visitingTeam) {
        visitingTeamRuns += 2; 
        } else if (teamAtBat === homeTeam) {
          homeTeamRuns += 2;
        };
      console.log(`🔵  ${visitingTeam} ${visitingTeamRuns}, ${homeTeam} ${homeTeamRuns}`);
    } else if (onFirst === 0 && onSecond === 1 && onThird === 0) {
      onThird = 1;
      updateTotalRunners(2);
    } else if (onFirst === 0 && onSecond === 1 && onThird === 1) {
      if (teamAtBat === visitingTeam) {
        visitingTeamRuns += 1; 
        } else if (teamAtBat === homeTeam) {
          homeTeamRuns += 1;
        };
      console.log(`🔵  ${visitingTeam} ${visitingTeamRuns}, ${homeTeam} ${homeTeamRuns}`);
    } else if (onFirst === 1 && onSecond === 0 && onThird === 1) {
      onSecond = 1;
      updateTotalRunners(3);
    } else if (onFirst === 0 && onSecond === 0 && onThird === 1) {
      onSecond = 1;
      updateTotalRunners(2);
    };
  };
  if (basesAchieved === 3) {
    if (totalRunners > 0) {
      if (teamAtBat === visitingTeam) {
        visitingTeamRuns += totalRunners;
      } else if (teamAtBat === homeTeam) {
        homeTeamRuns += totalRunners;
      };
      console.log(`🔵  ${visitingTeam} ${visitingTeamRuns}, ${homeTeam} ${homeTeamRuns}`);
    };
    onFirst = 0;
    onSecond = 0;
    onThird = 1;
    updateTotalRunners(1);
  };
  if (basesAchieved === 4) {
    if (teamAtBat === visitingTeam) {
      visitingTeamRuns += (totalRunners + 1);
    } else if (teamAtBat === homeTeam) {
      homeTeamRuns += (totalRunners + 1);
    };
    console.log(`🔵  ${visitingTeam} ${visitingTeamRuns}, ${homeTeam} ${homeTeamRuns}`);
    onFirst = 0;
    onSecond = 0;
    onThird = 0;
    updateTotalRunners(0);
  };
  console.log(`${visitingTeamRuns}, ${homeTeamRuns}`);
  if (inning[0] >= 3 && inning[1] === 1) {
    if (homeTeamRuns > visitingTeamRuns) {
      return `WALK OFF WIN! Final score: ${visitingTeam}: ${visitingTeamRuns}, ${homeTeam}: ${homeTeamRuns}`;
    };
  };
};

module.exports = advanceRunners;
*/

let onFirst = 'empty';
let onSecond = 'empty';
let onThird = 'empty';

let onBaseMatrix = ['empty', 'empty', 'empty', 'empty']; // each index of the array represents a base (1st, 2nd, 3rd, home)
let runnersOn = []; // tracks the order of runners on base [betts, seager, turner]
let runnersOnCorrectOrder = runnersOn.reverse(); // puts runners in correct order [turner, seager, betts]
let scoreAnnouncements = [];
let scoreAnnouncementsCorrectOrder = scoreAnnouncements.reverse();

const assignBase = function(hitType) {
  onBaseMatrix[hitType] = runnersOnCorrectOrder[0]; 
  hitType += 1;
  for (let x = 1; x < runnersOnCorrectOrder.length; x++) {
    if (hitType > 2) {
      let scoreAnnouncement = `${runnersOnCorrectOrder[x]} scores!`;
      scoreAnnouncements.push(scoreAnnouncement);
    } else {
    onBaseMatrix[hitType] = runnersOnCorrectOrder[x];
    }
    hitType += 1; 
  }
}

const advanceRunners = function(playerName, hitType) {
  runnersOn.push(playerName);
  if (hitType === 'single' || hitType === 'walk') {
    onFirst = playerName;
    assignBase(0);
  } else if (hitType === 'double') {
    onSecond = playerName;
    assignBase(1);
  } else if (hitType === 'triple') {
    onThird = playerName;
    assignBase(2);
  } else {
    runnersOn.push(playerName);
    for (let x = 0; x < runnersOnCorrectOrder.length; x++) {
      let scoreAnnouncement = `${runnersOnCorrectOrder[x]} scores!`;
      scoreAnnouncements.push(scoreAnnouncement);
    }
    onBaseMatrix = ['empty', 'empty', 'empty', 'empty'];
    runnersOn = [];
    // home run! clear bases, announce runners scoring, tally runs
  }
  //let baseState = [onFirst, onSecond, onThird];
  return [onBaseMatrix, scoreAnnouncementsCorrectOrder];
}

module.exports = advanceRunners;