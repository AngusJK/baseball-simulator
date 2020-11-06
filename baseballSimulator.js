const pitch = require('./pitch');
//const args = process.argv.slice(2);
const dodgers = ["Betts", "Seager", "Turner", "Muncy", "Smith", "Bellinger", "Pollock", "Hernandez", "Taylor"];
const rays = ["Meadows", "Lowe", "Arozarena", "Choi", "Margot", "Wendell", "Kiermaier", "Zunino", "Adames"];

var homeTeam = dodgers;
var visitingTeam = rays;
var homeTeamRuns = 0;
var visitingTeamRuns = 0;
var runs = 0;
var teamAtBat = "";
var batter = 0;
var homeBatter = 1;
var visitorBatter = 1;
var outs = 0;
var inning = [1, 0];
var half = "";
var onFirst = 0;
var onSecond = 0;
var onThird = 0;
var totalRunners = 0;
// var score = `Score: ${visitingTeam} ${visitingTeamRuns}, ${homeTeam} ${homeTeamRuns}`;

pitch();

module.exports = homeTeam;
module.exports = visitingTeam;
module.exports = homeTeamRuns;
module.exports = visitingTeamRuns;
module.exports = runs;
module.exports = teamAtBat;
module.exports = batter;
module.exports = homeBatter;
module.exports = visitorBatter;
module.exports = outs;
module.exports = inning;
module.exports = half;
module.exports = onFirst;
module.exports = onSecond;
module.exports = onThird;
module.exports = totalRunners;


// node baseballSimulator.js

