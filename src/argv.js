const { argv } = require("yargs")
  .option("path", {
    default: ".",
    describe: "your project directory"
  })
  .option("org", {
    describe: "your npm org"
  })
  .usage("Usage: $0 [path] --o [org]");

module.exports = argv;
