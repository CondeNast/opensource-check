const fs = require("fs");
const { argv } = require("yargs");
const jest = require("jest-cli");

const { path: rootPath } = argv;
if (!rootPath) {
  console.error("ERROR: --path: <path> is required"); // eslint-disable-line no-console
  process.exit(0);
}
if (!fs.existsSync(rootPath)) {
  console.error(`ERROR: path ${rootPath} does not exist`); // eslint-disable-line no-console
  process.exit(0);
}

const run = () => {
  const options = {
    projects: [__dirname], // run the tests in the opensource-check directory
    roots: ["__checks__"],
    verbose: true,
    silent: true
    // noStackTrace: true,
    // useStderr: true,
    // json:true,
  };
  jest.runCLI(options, options.projects, () => {});
};

// run();

exports.run = run;
