const swing = function() {
  let result = '';
  let randNum = Math.floor(Math.random() * 2);
  if (randNum < 0.3) {
    result = "Foul";
  } else if (randNum >= 0.3 && randNum < 0.6) {
    result = "Swing and miss";
  } else {
    result = "In play!";
  }
  return result;
}

module.exports = swing;