var totalRunners = require('./baseballSimulator');

const updateTotalRunners = function(nowOnBase) {
  totalRunners = nowOnBase;
};

module.exports = updateTotalRunners;