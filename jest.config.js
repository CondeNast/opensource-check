module.exports = {
  collectCoverage: false,
  testEnvironment: "node",
  roots: ["src"],
  haste: {
    providesModuleNodeModules: [".*"]
  }
};
