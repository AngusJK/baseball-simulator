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
  constructor() {
    this.teamsPlayedFor = [];
  }
  addTeams(team) {
    this.teamsPlayedFor.push(team);
  }
}

let joshDonaldson = new Player();

joshDonaldson.addTeams("Athletics");
joshDonaldson.addTeams("Blue Jays");
joshDonaldson.addTeams("Braves");

console.log(joshDonaldson);