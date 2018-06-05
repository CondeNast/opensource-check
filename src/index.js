const fs = require("fs");
const jest = require("jest-cli");

const { argv } = require("yargs")
                  .usage('Usage: $0 --path [path]')
                  .describe('path', 'Path to your local project directory')
                  .demandOption(['path']);
const { path: rootPath } = argv;

if (!fs.existsSync(rootPath)) {
  console.error(`Error: path ${rootPath} does not exist`); // eslint-disable-line no-console
  process.exit(0);
}

const run = () => {
  const options = {
    roots: ["__checks__"],
    verbose: true,
    testPathIgnorePatterns: []
  };
  jest.runCLI(options, [__dirname], () => {});
};

// run();

exports.run = run;
