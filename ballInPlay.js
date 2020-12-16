const ballInPlay = function() {
  let result = "";
  let randNum = Math.random();
  if (randNum < 0.65) {
    result = "out";
  } else if (randNum >= 0.65 && randNum < 0.85) {
    result = "single";
  } else if (randNum >= 0.85 && randNum < 0.94) {
    result = "double";
  } else if (randNum === 0.94) {
    result = "triple";
  } else {
    result = "home run"; 
  }
  return result;
}

module.exports = ballInPlay;