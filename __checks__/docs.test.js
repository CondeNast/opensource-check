const fs = require("fs");
const { path, org } = require('../src/argv');

describe("Documentation", () => {
  let readmeContent = fs.readFileSync(`${path}/README.md`, "utf8").toString();;

  it("should have a Readme", () => {
    expect(fs.existsSync(`${path}/README.md`)).toEqual(true);
  });
  if(org === "condenast") {
    it("should have a FYI", () => {
      expect(fs.existsSync(`${path}/FYI.md`)).toEqual(true);
    });
  }
  it("should have a License", () => {
    expect(
      fs.existsSync(`${path}/LICENSE`) ||
        fs.existsSync(`${path}/LICENSE.md`)
    ).toEqual(true);
  });
  it("should have a Code of Conduct", () => {
    expect(fs.existsSync(`${path}/CODE_OF_CONDUCT.md`)).toEqual(true);
  });
  it("should have Contributing Guidelines", () => {
    expect(fs.existsSync(`${path}/CONTRIBUTING.md`)).toEqual(true);
  });
  it("should have an Issue Template", () => {
    expect(fs.existsSync(`${path}/.github/ISSUE_TEMPLATE.md`)).toEqual(
      true
    );
  });
  it("should have a Pull Request Template", () => {
    expect(
      fs.existsSync(`${path}/.github/PULL_REQUEST_TEMPLATE.md`)
    ).toEqual(true);
  });
  it("should have a Changelog", () => {
    expect(fs.existsSync(`${path}/CHANGELOG.md`)).toEqual(true);
  });
  it("should have Examples", () => {
    const hasExamplesSection = /##.*Usage/.test(readmeContent);
    const hasExamplesDir = fs.existsSync(`${path}/examples`);
    expect(hasExamplesSection || hasExamplesDir).toEqual(true);
  });
  describe("Readme", () => {
    let pkg;
    beforeAll(() => {
      readmeContent = fs
        .readFileSync(`${path}/README.md`, "utf8")
        .toString();
      pkg = JSON.parse(fs.readFileSync(`${path}/package.json`, "utf8"));
    });
    it("Should have Package Name as Title", () => {
      let pkgName = pkg.name;
      const pkgNameParts = pkgName.split("/");
      if (pkgNameParts.length === 2) {
        [, pkgName] = pkgNameParts;
      } else {
        [pkgName] = pkgNameParts;
      }

      const titleRegExp = new RegExp(`#.*${pkgName}`, "i");

      const pkgNameWithoutHyphens = pkgName.replace(/-/g, " ");
      const titleWithoutHyphensRegExp = new RegExp(
        `#.*${pkgNameWithoutHyphens}`,
        "i"
      );

      expect(
        titleRegExp.test(readmeContent) ||
          titleWithoutHyphensRegExp.test(readmeContent)
      ).toEqual(true);
    });
    it("should have an Install section", () => {
      expect(/#.*Install/.test(readmeContent)).toEqual(true);
    });
    it("should have a Usage section", () => {
      expect(/#.*Usage/.test(readmeContent)).toEqual(true);
    });
  });
});
