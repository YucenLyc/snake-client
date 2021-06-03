const { hostname } = require("os")

const IP = "135.23.222.131",
const PORT = 50541,
const userInput = {
  message: {
    '1': "Hello",
    '2': "Nice Try",
    '3': "You lose",
  },
  movement: {
    w: 'Move: up',
    a: 'Move: left',
    s: 'Move: down',
    d: 'Move: right'
  }
};

module.exports = {
  IP,
  PORT,
  userInput
};