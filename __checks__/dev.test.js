const fs = require("fs");
const { argv } = require("yargs");

describe("Development", () => {
  let { path: rootPath, org } = argv;
  let pkg = JSON.parse(fs.readFileSync(`${rootPath}/package.json`, "utf8"));

  it("should have a package.json", () => {
    expect(fs.existsSync(`${rootPath}/package.json`)).toEqual(true);
  });
  it("should have a .gitignore", () => {
    expect(fs.existsSync(`${rootPath}/.gitignore`)).toEqual(true);
  });
  it("should have a Linter", () => {
    const lintCommand = pkg.scripts.lint;
    expect(lintCommand).not.toEqual("");
  });
  it("should have Tests", () => {
    const testCommand = pkg.scripts.test;
    expect(testCommand).not.toEqual("");
  });
  describe("package.json", () => {
    if (org) {
      it("should have the org namespace", () => {
          expect(pkg.name.startsWith(`@${org}/`)).toEqual(true);
      });
    }
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
