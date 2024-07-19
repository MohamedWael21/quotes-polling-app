const ansi = require("ansi-colors");
const POSSIBLE_COLORS = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "gray",
  "white",
];

function getRandomColor() {
  return POSSIBLE_COLORS[Math.floor(Math.random() * POSSIBLE_COLORS.length)];
}

module.exports = function print(quote) {
  console.log(`${ansi[getRandomColor()](quote)}\n`);
};
