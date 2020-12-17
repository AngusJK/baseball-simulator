/*
const createPlayer = function(name, team, position, number) {
  const player = {
    name: name,
    team: team,
    position: position,
    number: number,
    logDetails: function() {
      console.log(`${this.name} wears number ${this.number} and plays for the ${this.team}.`);
    }
  };
  return player;
};

const mookieBetts = createPlayer("Mookie Betts", "Dodgers", 9, 50);
const mikeTrout = createPlayer("Mike Trout", "Angels", 8, 27);
const joeyVotto = createPlayer("Joey Votto", "Reds", 3, 19);

mookieBetts.logDetails();
mikeTrout.logDetails();
joeyVotto.logDetails();
*/ 

class Player {
  constructor(name, currentTeam, position) {
    this.name = name;
    this.teamsPlayedFor = [currentTeam];
    this.position = position;
  }
  addTeams(team) {
    this.teamsPlayedFor.push(team);
  }
  bio() {
    return `${this.name} currently plays for the ${this.teamsPlayedFor[0]}.`;
  }
}

class Batter extends Player {
  setBats(handedness) {
    if (handedness.toLowerCase() === "right" || handedness.toLowerCase() === "left" || handedness.toLowerCase() === "switch") {
    this.bats = handedness;
    }
  }
  bio() {
    return `${this.bats}-handed batter. ${super.bio()}`;
  }
}

class Pitcher extends Player {
  setThrows(handedness) {
    if (handedness.toLowerCase() === "right" || handedness.toLowerCase() === "left") {
    this.throws = handedness;
    }
  }
  bio() {
    return `${this.throws}-handed pitcher. ${super.bio()}`;
  }
}
/*
let joshDonaldson = new Batter("Josh Donaldson", "Braves");
let giancarloStanton = new Batter("Giancarlo Stanton", "Yankees");
let claytonKershaw = new Pitcher("Clayton Kershaw", "Dodgers");

joshDonaldson.addTeams("Athletics");
joshDonaldson.addTeams("Blue Jays");
joshDonaldson.addTeams("Indians");
joshDonaldson.bats("Right");
giancarloStanton.addTeams("Marlins");
giancarloStanton.bats("Right");
claytonKershaw.throws("Left");

console.log(joshDonaldson.bio());
console.log(claytonKershaw.bio());
*/

const yandyDiaz = new Batter("Yandi Díaz", "Rays", "1B");
const brandonLowe = new Batter("Brandon Lowe", "Rays", "2B");
const randyArozarena = new Batter("Randy Arozarena", "Rays", "DH");
const hunterRenfroe = new Batter("Hunter Renfroe", "Rays", "RF");
const manuelMargot = new Batter("Manuel Margot", "Rays", "LF");
const joeyWendle = new Batter("Joey Wendle", "Rays", "3B");
const willyAdames = new Batter("Willy Adames", "Rays", "SS");
const kevinKiermaier = new Batter("Kevin Kiermaier", "Rays", "CF");
const mikeZunino = new Batter("Mike Zunino", "Rays", "C");

const rays = [yandyDiaz, brandonLowe, randyArozarena, hunterRenfroe, manuelMargot, joeyWendle, willyAdames, kevinKiermaier, mikeZunino];
const visitingTeam = rays;

module.exports = visitingTeam;