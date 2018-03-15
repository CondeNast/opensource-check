const fs = require("fs");
const { argv } = require("yargs");

describe("Development", () => {
  let pkg;
  let rootPath;
  let org;
  beforeAll(() => {
    ({ path: rootPath, org } = argv);
    pkg = JSON.parse(fs.readFileSync(`${rootPath}/package.json`, "utf8"));
  });
  it("should have a package.json", () => {
    expect(fs.existsSync(`${rootPath}/package.json`)).toEqual(true);
  });
  it("should have a .gitignore", () => {
    expect(fs.existsSync(`${rootPath}/.gitignore`)).toEqual(true);
  });
  it("should have a .npmignore", () => {
    expect(fs.existsSync(`${rootPath}/.npmignore`)).toEqual(true);
  });
  it("should have a linter", () => {
    // const lintDeps = Object.keys(pkg.devDependencies).filter(devDep =>
    //   devDep.startsWith("eslint")
    // );
    // expect(lintDeps.length).not.toEqual(0);
    const lintCommand = pkg.scripts.lint;
    expect(lintCommand).not.toEqual("");
  });
  it("should have tests", () => {
    // const testDir = pkg.directories.test;
    // expect(fs.existsSync(`${rootPath}/${testDir}`)).toEqual(true);
    const testCommand = pkg.scripts.test;
    expect(testCommand).not.toEqual("");
  });
  describe("package.json", () => {
    it("should have the org namespace, if applicble", () => {
      if (org) {
        expect(pkg.name.startsWith(`@${org}/`)).toEqual(true);
      }
    });
    it("should have a version", () => {
      expect(pkg.version).not.toEqual("");
    });
    it("should have a description", () => {
      expect(pkg.description).not.toEqual("");
    });
    it("should have a main or bin", () => {
      expect(pkg.main || pkg.bin).toBeDefined();
    });
    it("should have a repository", () => {
      expect(pkg.repository).toBeDefined();
    });
    it("should have contributors", () => {
      expect(pkg.author || pkg.contributors).toBeDefined();
    });
    it("should have a license", () => {
      const { license } = pkg;
      let hasLicense = false;
      if (org === "condenast") {
        hasLicense =
          license === "Apache-2.0" || license === "LICENSE IN LICENSE";
      } else {
        hasLicense = license !== null;
      }
      expect(hasLicense).toEqual(true);
    });
  });
});
