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

class Player {
  constructor(name) {
    this.name = name;
    this.teamsPlayedFor = [];
  }
  addTeams(team) {
    this.teamsPlayedFor.push(team);
  }
}

class Batter extends Player {
  bats(handedness) {
    this.bats = handedness;
  }
}

class Pitcher extends Player {
  throws(handedness) {
    this.throws = handedness;
  }
}

let joshDonaldson = new Batter("Josh Donaldson");
let giancarloStanton = new Batter("Giancarlo Stanton");
let claytonKershaw = new Pitcher("Clayton Kershaw");

joshDonaldson.addTeams("Athletics");
joshDonaldson.addTeams("Blue Jays");
joshDonaldson.addTeams("Braves");
joshDonaldson.bats("Right");
giancarloStanton.addTeams("Marlins");
giancarloStanton.addTeams("Yankees");
giancarloStanton.bats("Right");
claytonKershaw.addTeams("Dodgers");
claytonKershaw.throws("Left");

console.log(joshDonaldson);
console.log(giancarloStanton);
console.log(claytonKershaw);