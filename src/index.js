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
    // silent: true,
    // showConfig: true,
    // noStackTrace: true,
    // useStderr: true,
    // json:true,
  };
  jest.runCLI(options, [__dirname], () => {});
};

// run();

exports.run = run;
