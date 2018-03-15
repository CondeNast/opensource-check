const fs = require("fs");
const { argv } = require("yargs");

describe("Documentation", () => {
  let rootPath;
  let readmeContent;
  beforeAll(() => {
    ({ path: rootPath } = argv);
    readmeContent = fs.readFileSync(`${rootPath}/README.md`, "utf8").toString();
  });
  it("should have a Readme", () => {
    expect(fs.existsSync(`${rootPath}/README.md`)).toEqual(true);
  });
  it("should have a License", () => {
    expect(
      fs.existsSync(`${rootPath}/LICENSE`) ||
        fs.existsSync(`${rootPath}/LICENSE.md`)
    ).toEqual(true);
  });
  it("should have a Code of Conduct", () => {
    expect(fs.existsSync(`${rootPath}/CODE_OF_CONDUCT.md`)).toEqual(true);
  });
  it("should have Contributing Guidelines", () => {
    expect(fs.existsSync(`${rootPath}/CONTRIBUTING.md`)).toEqual(true);
  });
  it("should have an Issue Template", () => {
    expect(fs.existsSync(`${rootPath}/.github/ISSUE_TEMPLATE.md`)).toEqual(
      true
    );
  });
  it("should have a Pull Request Template", () => {
    expect(
      fs.existsSync(`${rootPath}/.github/PULL_REQUEST_TEMPLATE.md`)
    ).toEqual(true);
  });
  it("should have a Changelog", () => {
    expect(fs.existsSync(`${rootPath}/CHANGELOG.md`)).toEqual(true);
  });
  it("should have Examples", () => {
    const hasExamplesSection = /##.*Usage/.test(readmeContent);
    const hasExamplesDir = fs.existsSync(`${rootPath}/examples`);
    expect(hasExamplesSection || hasExamplesDir).toEqual(true);
  });
  describe("Readme", () => {
    let pkg;
    beforeAll(() => {
      readmeContent = fs
        .readFileSync(`${rootPath}/README.md`, "utf8")
        .toString();
      pkg = JSON.parse(fs.readFileSync(`${rootPath}/package.json`, "utf8"));
    });
    it("should have a Title", () => {
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
