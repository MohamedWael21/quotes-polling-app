const ansi = require("ansi-colors");
module.exports = function print(quote) {
  console.log(`${ansi.green(quote)}\n`);
};
