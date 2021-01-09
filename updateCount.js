let count = [0, 0];
const updateCount = function(pitchType) {
  if (pitchType === "Strike") {
    count[1] += 1;
  }
  if (pitchType === "Ball") {
    count[0] += 1;
  }
  if (count[0] === 4) {
    count = [0, 0];
    return "Ball four. Batter walks.";
  }
  if (count[1] === 3) {
    count = [0, 0];
    return "Strike three. Batter out.";
  }
  return count;
}

module.exports = updateCount;