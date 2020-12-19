const swing = function() {
  let result = '';
  let randNum = Math.random();
  if (randNum < 0.15) {
    result = "Foul";
  } else if (randNum >= 0.15 && randNum < 0.2) {
    result = "Swing and miss";
  } else {
    result = "In play!";
  }
  return result;
};

module.exports = swing;
