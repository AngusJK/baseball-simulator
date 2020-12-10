/*
var inning = require('./baseballSimulator');
const visitingTeam = require('./baseballSimulator');
const homeTeam = require('./baseballSimulator');
var visitingTeamRuns = require('./baseballSimulator');
var homeTeamRuns = require('./baseballSimulator');
var half = require('./baseballSimulator');
var teamAtBat = require('./baseballSimulator');
var batter = require('./baseballSimulator');
var visitorBatter = require('./baseballSimulator');
var homeBatter = require('./baseballSimulator');
var outs  = require('./baseballSimulator');
//var onFirst = require('./baseballSimulator');
//var onSecond = require('./baseballSimulator');
//var onThird = require('./baseballSimulator');
var updateTotalRunners = require('./updateTotalRunners');
var advanceRunners = require('./advanceRunners');
*/
const pitch = function() {
  let ballOrStrike = '';
  
  let randNum = Math.random();

  
  if (randNum > 0.5) {
    ballOrStrike = 'Strike';
  } else if (randNum < 0.5) {
    ballOrStrike = 'Ball';
  }

  return ballOrStrike;
  //console.log(`${visitingTeamRuns}, ${homeTeamRuns}`);
  /*
  console.log(inning);
  console.log(homeTeam);
  console.log(visitingTeam);
  if ((inning[0] > 3 && inning[1] === 0 && visitingTeamRuns !== homeTeamRuns) || (inning[0] >= 3 && inning[1] === 1 && homeTeamRuns > visitingTeamRuns)) {
    console.log(`GAME OVER Final score: ${visitingTeam}: ${visitingTeamRuns}, ${homeTeam}: ${homeTeamRuns}`);
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
      var play = "";
      var result = Math.floor(Math.random() * 101);
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
        advanceRunners(4);
      };
      batter += 1;
      if (batter === 10) {
        batter = 1;
      };
    };
    console.log(`3 out, inning over`);
    if (inning[1] === 0) {
      visitorBatter = batter;
    } else if (inning[1] === 1) {
      homeBatter = batter;
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
    console.log(`Score: ${visitingTeam} ${visitingTeamRuns}, ${homeTeam} ${homeTeamRuns}`);
    //batter = 0;
    updateTotalRunners(0);
    //pitch();
  };
  */
}; 

module.exports = pitch;
