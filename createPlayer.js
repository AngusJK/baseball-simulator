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
  constructor(name, currentTeam) {
    this.name = name;
    this.teamsPlayedFor = [currentTeam];
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