const nxPreset = require("@nx/jest/preset").default;

module.exports = {
  ...nxPreset,
  injectGlobals: true,
  setupFilesAfterEnv: ["<rootDir>/../../test-setup.ts"],
};
