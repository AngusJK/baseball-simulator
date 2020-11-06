const onFirst = require('./baseballSimulator');
const onSecond = require('./baseballSimulator');
const onThird = require('./baseballSimulator');
const teamAtBat = require('./baseballSimulator');
const visitingTeam = require('./baseballSimulator');
const visitingTeamRuns = require('./baseballSimulator');
const homeTeam = require('./baseballSimulator');
const homeTeamRuns = require('./baseballSimulator');
const totalRunners = require('./baseballSimulator');
const inning = require('./baseballSimulator');

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
