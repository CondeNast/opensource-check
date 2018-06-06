const fs = require("fs");
const jest = require("jest-cli");
const { path } = require("./argv");

if (!fs.existsSync(path)) {
  console.error(`Error: path ${path} does not exist`); // eslint-disable-line no-console
  process.exit(0);
}

const run = () => {
  const options = {
    roots: ["__checks__"],
    verbose: true,
    testPathIgnorePatterns: []
  };
  jest.runCLI(options, [__dirname]).then(({ results }) => {
    if (!results.success) {
      process.exit(1);
    }
  });
};

// run();

exports.run = run;
