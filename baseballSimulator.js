const pitch = require('./index');

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

const team = {
  name: ""
};

const player = {
  firstName: "",
  lastName: "",
  fullName: this.firstName + this.lastName,
  position: "",
  uniformNumber: "",
};

pitch();

// node baseballSimulator.js

