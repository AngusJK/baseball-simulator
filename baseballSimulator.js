let outs = 0;
let inning = 1;
const team = {
  name: "",
  pitcher: "",
  catcher: "",
  firstBaseman: "",
  secondBaseman: "",
  thirdBaseman: "",
  shortStop: "",
  leftFielder: "",
  centerFielder: "",
  rightFielder: "", 
  designatedHitter: ""
}

const pitch = function() {
  
  
  let result = Math.floor.random(100);
  let play = "";
  if (result > 0 && result < 65) {
    play = "out";
  } else if (result >= 65 && result < 82) {
    play = "single";
  }
}

