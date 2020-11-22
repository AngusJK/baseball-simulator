const createPlayer = function(name, team, position, number) {
  const player = {
    name: name,
    team: team,
    position: position,
    number: number
  };
  return player;
};

const mookieBetts = createPlayer("Mookie Betts", "Dodgers", 9, 50);
const mikeTrout = createPlayer("Mike Trout", "Angels", 8, 27);
const joeyVotto = createPlayer("Joey Votto", "Reds", 3, 19);

console.log(mookieBetts.team);
console.log(mikeTrout.number);
console.log(joeyVotto.position);
