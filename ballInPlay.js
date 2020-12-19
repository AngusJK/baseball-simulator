const ballInPlay = function() {
  let result = "";
  let randNum = Math.random();
  if (randNum < 0.2) {
    result = "out";
  } else if (randNum >= 0.2 && randNum < 0.5) {
    result = "single";
  } else if (randNum >= 0.5 && randNum < 0.7) {
    result = "double";
  } else if (randNum >= 0.7 && randNum < 0.8) {
    result = "triple";
  } else {
    result = "home run"; 
  }
  return result;
}

module.exports = ballInPlay;